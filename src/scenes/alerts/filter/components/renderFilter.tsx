import * as React from 'react';
import { Field } from 'redux-form';
import { filter as _filter, map as _map, isEmpty as _isEmpty } from 'lodash';
import * as Popover from 'react-popover';

import { popoverChildIsAvailable, popoverChildNotAvailable } from './../../../../service/common/action'
import SetFieldType from './setFieldType';
import { FieldType } from '../../../../model/list/FieldType';
import { formatMessage } from './../../../../common/translation/Translate';
import SvgIconEnum from 'src/constants/icons/svgIconsEnum';

interface State {
  isActionVisible: boolean,
  isPatternVisible: boolean,
  activeAction: number
}
interface Props {
  resetForm: any,
  handleSubmit: any,
  fields: any,
  allFieldDisplay: any,
  filterPatternIndex: any,
  isfilterRemove: any,
  fieldTypeSelected: any,
}

class RenderFilter extends React.Component<Props, State> {
  //  note: Created a bound method to forward the component's properties on redux-form onSubmit
  state = {
    isActionVisible: false,
    isPatternVisible: false,
    activeAction: null
  }

  private toggleActionVisible = (index = null) => {
    !this.state.isActionVisible ? popoverChildIsAvailable() : popoverChildNotAvailable();
    this.setState({ isActionVisible: !this.state.isActionVisible, activeAction: index });
  }
  private togglePatternVisible = (index = null) => {
    !this.state.isPatternVisible && popoverChildIsAvailable();
    this.setState({ isPatternVisible: !this.state.isPatternVisible, activeAction: index });
  }
  private submit = (formValues, dispatch) => {
    this.filterSubmit(formValues, this.props);
  }
  private filterSubmit = (formValues, props) => {
    let fieldValue: any = [];
    let fieldValueArray = [];
    let allListDetails = props.allListDetails;
    const { id, userId, name, availableLists, alertIdSelectedSb, defaultDisplay } = props;
    _map(formValues.filter, (each) => {
      fieldValue = [];
      let defaultAlgorithm = 7;
      _map(props.AlertsListFields, (list) => {
        if (list.hibernateName === each.field) {
          fieldValue = list;
        }
      });
      // TODO : use dataType instead of using hibernateName and change operator algorithm algorithm percent to be dynamic if needed
      if (fieldValue.dataType === 'DATE') {
        fieldValue['operator'] = '+';
        fieldValue['value'] = each.value;
        fieldValue['valueTo'] = each.value1 ? each.value1 : each.value;
        fieldValue['algorithm'] = 2;
        fieldValue['algorithmPercent'] = 80;
      } else if (fieldValue.dataType === 'NUMBER') {
        fieldValue['operator'] = '+';
        fieldValue['value'] = each.value;
        fieldValue['valueTo'] = each.value1 ? each.value1 : each.value;
        fieldValue['algorithm'] = 1;
      }
      // note: this is for type select. as of now we dnt get select.
      // else if (fieldValue.dataType === 'SELECT') {
      //   fieldValue['operator'] = '+';
      //   fieldValue['value'] = each.value;
      //   fieldValue['valueTo'] = each.value;
      //   fieldValue['algorithm'] = 7;
      // } 
      else {
        fieldValue['operator'] = '+';
        fieldValue['value'] = each.value;
        fieldValue['valueTo'] = each.value;
        fieldValue['algorithm'] = defaultAlgorithm;
        if (fieldValue['algorithm'] === 2) {
          fieldValue['algorithmPercent'] = 80;
        }
      }
      if (!_isEmpty(each.match)) {
        switch (each.match) {
          case 'exactMatch':
            defaultAlgorithm = 1;
            break;
          case 'contains':
            defaultAlgorithm = 9;
            break;
          case 'startsWith':
            defaultAlgorithm = 7;
            break;
          case 'endsWith':
            defaultAlgorithm = 8;
            break;
          default:
            defaultAlgorithm = 7;
        }
      }
      // TODO : if needs hibernate name to be change dynamic
      if (fieldValue.hibernateName != 'creationDtg' && fieldValue.hibernateName !== 'lastUpdateDtg' && fieldValue.hibernateName != 'priority' &&
        fieldValue.hibernateName != 'score' && fieldValue.hibernateName !== 'dueDate') {
        fieldValue['algorithm'] = defaultAlgorithm;
      }
      fieldValueArray.push(fieldValue)
    });
    allListDetails['listOfFields'] = fieldValueArray;
    props.getAllAlertFilterList(alertIdSelectedSb, id, userId, availableLists, name, fieldValueArray, allListDetails, defaultDisplay);
  }
  private renderAction = (index) => {
    return (
              <button className="o-btn o-btn--inline" type="button" onClick={() => {
                this.toggleActionVisible();
                this.props.fields.remove(index);
              }}>
                {formatMessage('global.delete')}
              </button>
    );
  }

  private renderPattern = (index, member) => {
    return (
      <div key={index}>
        <fieldset className='o-radio-button'>
          <Field component="input" type="radio" className="o-radio-button__input" id="exactMatch" name={`${member}.match`} value="exactMatch"
            onChange={this.togglePatternVisible} />
          <label htmlFor="exactMatch" className="o-radio-button__label">
            {formatMessage('filter.exactMatch')}
          </label>
        </fieldset>

        <fieldset className='o-radio-button'>
          <Field component="input" type="radio" className="o-radio-button__input" id="contains" name={`${member}.match`} value="contains"
            onChange={this.togglePatternVisible} />
          <label htmlFor="contains" className="o-radio-button__label">
            {formatMessage('filter.contains')}
          </label>
        </fieldset>

        <fieldset className='o-radio-button'>
          <Field component="input" type="radio" className="o-radio-button__input" id="startsWith" name={`${member}.match`} value="startsWith"
            onChange={this.togglePatternVisible} />
          <label htmlFor="startsWith" className="o-radio-button__label">
            {formatMessage('filter.startWith')}
          </label>
        </fieldset>

        <fieldset className='o-radio-button'>
          <Field component="input" type="radio" className="o-radio-button__input" id="endsWith" name={`${member}.match`} value="endsWith"
            onChange={this.togglePatternVisible} />
          <label htmlFor="endsWith" className="o-radio-button__label">
            {formatMessage('filter.endWith')}
          </label>
        </fieldset>
      </div>);
  }

  public render() {
    return (
      <React.Fragment>
        <div className="o-heading o-heading--secondary">
          <h1 className="o-heading__title">Filter</h1>
          <button className="o-btn o-btn--transparent ow-clr" type="button" onClick={() => this.props.resetForm()}>
            {formatMessage('filter.removeFilters')}
          </button>
        </div>
        <form onSubmit={this.props.handleSubmit(this.submit)}>
          {this.props.fields.map((member, index) => {
            return (
              <div className="c-popover__body g-block ow-clr" key={index}>
                <ul className="g-list g-list--borders g-list-display">
                  <li className="g-list__item list_item_flt">
                    <fieldset className="c-form__field">
                      <Field
                        name={`${member}.field`}
                        type="select"
                        component="select"
                        label="Last"
                        className="o-select"
                      // onChange={setFieldType(index, member)}
                      >
                        <option value=""></option>
                        {this.props.allFieldDisplay.map((each, index) => (
                          <option value={each.name} key={index}>{each.description}</option>
                        ))}
                      </Field>
                    </fieldset>
                  </li>
                  <li className="g-list__item list_item_flt m-top ow-muti_btn">
                    <Popover
                      isOpen={this.state.isPatternVisible && this.state.activeAction === index}
                      body={this.renderPattern(index, member)}
                      onOuterAction={() => {
                        popoverChildNotAvailable();
                        this.setState({ isPatternVisible: false })
                      }}
                      className='c-popover js-popover is-ready ow-popup'
                      place='below'
                      tipSize={0.01} >
                      <button className="o-btn o-btn--neutral o-btn--tooltip js-modal-trigger ow-height" onClick={() => this.togglePatternVisible(index)} type="button" aria-label="Settings" data-modal="alert-settings">
                        <svg className="o-icon o-icon--parameters">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 14" id="settings-icon" width="100%" height="100%"><title>Settings</title>
                            <use xlinkHref={SvgIconEnum.SETTINGS.url}></use></svg>
                        </svg>
                      </button>
                    </Popover>
                  </li>
                  <li className="g-list__item list_item_flt m-top">
                    <SetFieldType index={index} member={member} allFieldDisplay={this.props.allFieldDisplay} fieldTypeSelected={this.props.fieldTypeSelected} />
                    {/* {setFieldType(index, member, props.allFieldDisplay, props.fieldTypeSelected)} */}
                  </li>
                  <li className="g-list__item list_item_flt m-top">
                    <Popover
                      isOpen={this.state.isActionVisible && this.state.activeAction === index}
                      body={this.renderAction(index)}
                      style={{ width: '8rem'}}
                      onOuterAction={() => {
                        popoverChildNotAvailable();
                        this.setState({ isActionVisible: false })
                      }}
                      place='below'
                      className='c-popover js-popover is-ready ow-popup'
                      /* enterExitTransitionDurationMs={1} */
                      tipSize={0.01} >
                      <button className="o-more-btn c-horizontal-card__more-btn js-popover-trigger filter-option"
                        onClick={() => this.toggleActionVisible(index)}>
                        <span className="u-visually-hidden">
                          {formatMessage('filter.actions')}
                        </span>
                      </button>
                    </Popover>
                  </li>
                </ul>
              </div>
            )
          })}

          <div className="c-popover__primary-actions ow-clr">
            <button type="button" onClick={() => this.props.fields.push({})}
              className="o-btn o-btn--neutral js-popover-trigger has-popover-displayed">
              {formatMessage('filter.addFilter')}
            </button>
            {this.props.fields.length > 0 && <button className="o-btn o-btn--inline u-accent-color ow-fltright" type="submit">
              {formatMessage('global.apply')}
            </button>}
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default RenderFilter;
