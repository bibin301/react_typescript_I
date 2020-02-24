import * as React from 'react';
import * as Popover from 'react-popover';
import { connect } from 'react-redux';
import { FieldArray, Field, reduxForm, formValueSelector, InjectedFormProps } from 'redux-form';
import { map as _map } from 'lodash';

import { popoverChildIsAvailable, popoverChildNotAvailable } from './../../service/common/action';
import SvgIconEnum from './../../constants/icons/svgIconsEnum';
import { formatMessage } from './../../common/translation/Translate';
import FilterFieldType from './filterFieldType';
import { RootStore } from './../../store/rootReducer';

interface IntProps {
  fields: any,
  filterSubmit: (filter: any) => void,
  filterTypeSelected?: any,
}

interface IntState {
  isActionVisible: boolean,
  isPatternVisible: boolean,
  activeAction: number
}
class SimpleFilter extends React.Component<InjectedFormProps<any, IntProps> & IntProps, IntState> {
  state = {
    isActionVisible: false,
    isPatternVisible: false,
    activeAction: null
  }
  
  private submit = (value, ...rest) => {
    this.props.filterSubmit(value);
  }

  private toggleActionVisible = (index = null) => {
    !this.state.isActionVisible ? popoverChildIsAvailable() : popoverChildNotAvailable();
    this.setState({ isActionVisible: !this.state.isActionVisible, activeAction: index });
  }
  
  private togglePatternVisible = (index = null) => {
    !this.state.isPatternVisible && popoverChildIsAvailable();
    this.setState({ isPatternVisible: !this.state.isPatternVisible, activeAction: index });
  }

  private renderAction = (index, fields) => {
    return (
      <button className="o-btn o-btn--inline" type="button" onClick={() => {
        this.toggleActionVisible();
        fields.remove(index);
      }}>
        {formatMessage('global.delete')}
      </button>
    );
  }



  private renderPattern = (index, member) => {
    return (
      <div key={index}>
        {/* {_map(FILTER_TYPE_VALUES, (each, i) => (
          <fieldset key={i} className='o-radio-button'>
            <Field component="input"
              type="radio"
              className="o-radio-button__input"
              id={each.name}
              name={`${member}.filterType`}
              value={each.value}
              onChange={this.togglePatternVisible} />
            <label htmlFor={each.name} className="o-radio-button__label">
              {formatMessage(`filter.${each.name}`)}
            </label>
        </fieldset>
        ))} */}

        <fieldset className='o-radio-button'>
            <Field component="input"
              type="radio"
              className="o-radio-button__input"
              id="startWith"
              name={`${member}.filterType`}
              value={7}
              onChange={this.togglePatternVisible} />
            <label htmlFor="startWith" className="o-radio-button__label">
              {formatMessage(`filter.startWith`)}
            </label>
        </fieldset>
        <fieldset className='o-radio-button'>
            <Field component="input"
              type="radio"
              className="o-radio-button__input"
              id={'endWith'}
              name={`${member}.filterType`}
              value={8}
              onChange={this.togglePatternVisible} />
            <label htmlFor={'endWith'} className="o-radio-button__label">
              {formatMessage(`filter.endWith`)}
            </label>
        </fieldset>
        <fieldset className='o-radio-button'>
            <Field component="input"
              type="radio"
              className="o-radio-button__input"
              id={'contains'}
              name={`${member}.filterType`}
              value={9}
              onChange={this.togglePatternVisible} />
            <label htmlFor={'contains'} className="o-radio-button__label">
              {formatMessage(`filter.contains`)}
            </label>
        </fieldset>
        <fieldset className='o-radio-button'>
            <Field component="input"
              type="radio"
              className="o-radio-button__input"
              id={'exactMatch'}
              name={`${member}.filterType`}
              value={1}
              onChange={this.togglePatternVisible} />
            <label htmlFor={'exactMatch'} className="o-radio-button__label">
              {formatMessage(`filter.exactMatch`)}
            </label>
        </fieldset>
      </div>);
  }

  private renderMembers= ({fields, meta: {error, submitFailed}}) => {
    return (
      <React.Fragment>
        <div>
          {fields.map((member, index) => (
            <ul key={index} className="g-list g-list--borders g-list-display">
              <li key={index} className="g-list__item list_item_flt">
                <fieldset className="c-form__field">
                  <Field
                    className="o-select"
                    name={`${member}.field`}
                    type="text"
                    component="select"
                    label="field"
                  >
                    <option value={null}></option>
                    {_map(this.props.fields, (each, i) => (
                      <option key={i} value={each.value}>{each.label}</option>
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
                  tipSize={0.02} >
                  <button className="o-btn o-btn--neutral ow-height" disabled={index !== 0} onClick={() => this.togglePatternVisible(index)} type="button">
                    <svg className="o-icon o-icon--parameters">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 14" id="settings-icon" width="100%" height="100%"><title>Settings</title>
                        <use xlinkHref={SvgIconEnum.SETTINGS.url}></use></svg>
                    </svg>
                  </button>
                </Popover>
              </li>
              <li className="g-list__item list_item_flt m-top ow-muti_btn">

                <FilterFieldType index={index} member={member} allFieldDisplay={this.props.fields} filterTypeSelected={this.props.filterTypeSelected[0].field} />  
              </li>
              <li className="g-list__item list_item_flt m-top">
                <Popover
                  isOpen={this.state.isActionVisible && this.state.activeAction === index}
                  body={this.renderAction(index, fields)}
                  style={{ width: '8rem'}}
                  onOuterAction={() => {
                    popoverChildNotAvailable();
                    this.setState({ isActionVisible: false })
                  }}
                  place='below'
                  className='c-popover js-popover is-ready ow-popup'
                  tipSize={0.02} >
                  <button className="o-more-btn c-horizontal-card__more-btn js-popover-trigger filter-option"
                    onClick={() => this.toggleActionVisible(index)}>
                    <span className="u-visually-hidden">
                      {formatMessage('filter.actions')}
                    </span>
                  </button>
                </Popover>
              </li>
            </ul>
          ))}

        </div>
        <div className="c-popover__primary-actions ow-clr">
          <button type="button" onClick={() => fields.push({})}
            className="o-btn o-btn--neutral js-popover-trigger has-popover-displayed">
            {formatMessage('filter.addFilter')}
          </button>
          {submitFailed && error && <span>{error}</span>}
        </div>
      </React.Fragment>
    )
  }

  public render(){
    const { handleSubmit, submitting } = this.props;
    return (              
      <div className='c-popover js-popover is-ready' style={{ left: '-20rem', width: '42rem'}}>
        <div className="o-heading o-heading--secondary">
          <h1 className="o-heading__title">Filter</h1>
        </div>
        <form onSubmit={handleSubmit(this.submit)} >
          <div className="c-popover__body g-block ow-clr">
            <FieldArray name="filters" component={this.renderMembers}  props={null} rerenderOnEveryChange />
            <button disabled={submitting} className="o-btn o-btn--inline u-accent-color ow-fltright" type="submit">
              {formatMessage('global.apply')}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const selector = formValueSelector('simpleFilter')

const mapStateToProps = (state: RootStore) => ({
  filterTypeSelected: selector(state, 'filters')
})

const AdminFilterConnected = connect(
  mapStateToProps,
  null
)(SimpleFilter);

const validate = (values) => {
  const error = {};
  return error;
}

export default reduxForm<any, IntProps> ({
  form: 'simpleFilter',
  validate
})(AdminFilterConnected)



