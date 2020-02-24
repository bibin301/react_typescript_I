import * as React from 'react'
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { assign as _assign,
  map as _map } from 'lodash';
import * as moment from 'moment';

import { formatMessage } from './../../../common/translation/Translate';
import { saveAdminOrgUnit } from './../../../service/admin/action';
const tabName = {
  GENERAL: 'general',
  HISTORY: 'history'
}

interface IntProps {
  user: any,
  data: any,
  history: any[],
  onHide: () => any
}

interface IntState {
  activeTab: string
}

class EditOrgUnit extends React.Component<InjectedFormProps<any, IntProps> & IntProps, IntState> {
  state ={
    activeTab: tabName.GENERAL
  }

  componentDidMount() {
    this.handleFormInitialValues();
  }

  private handleFormInitialValues = () => {
    const { data } = this.props;
    console.log('day..', data)
    this.props.initialize({
      name: data.name,
      description: data.description,
      code: data.code,
      associatedCurrency: data.associatedCurrency,
      associatedBIC: data.associatedBIC,
    });
  }

  private editOrgUnitSubmit = (formValues) => {
      const { user, data } = this.props;
      const orgUnit = _assign({}, data, formValues)
      console.log("submit.. ", orgUnit, user)
      saveAdminOrgUnit(orgUnit, user);
      this.props.onHide();
  }

  private changeTab = (event: any ) => {
    this.setState({activeTab: event.target.name});
  }

  private renderContent = () => {
    const { activeTab } = this.state;
    
    switch (activeTab) {
      case tabName.GENERAL:
        return (
            <div className="c-modal__body">
              <div className="c-form__field ">
                <label className="o-label c-form__label">
                  Organization Unit Name
                </label>
                <Field
                  name='name'
                  type="input"
                  component="input"
                  placeholder="Group Name"
                  className="o-input c-form__input" />
              </div>
              <div className="c-form__field ">
                <label className="o-label c-form__label">
                  Description
                </label>
                <Field
                  name='description'
                  type="input"
                  placeholder="Description"
                  component="textarea"
                  className="o-input c-form__input" />
              </div>
              <div className="c-form__field ">
                <label className="o-label c-form__label">
                  Code
                </label>
                <Field
                  name='code'
                  placeholder="Code"
                  type="input"
                  component="input"
                  className="o-input c-form__input" />
              </div>
              <div className="c-form__field ">
                <label className="o-label c-form__label">
                  Currency-Base
                </label>
                <Field
                  name='associatedCurrency'
                  placeholder="Currency-Base"
                  type="input"
                  component="input"
                  className="o-input c-form__input" />
              </div>
              <div className="c-form__field ">
                <label className="o-label c-form__label" >
                  BIC
                </label>
                <Field
                  name='associatedBIC'
                  placeholder="BIC"
                  type="input"
                  component="input"
                  className="o-input c-form__input" />
              </div>
            </div>
          );
      case tabName.HISTORY:
      return (<React.Fragment>
        {_map( this.props.history, (each, key)=> (
          <div className='rp-space' key={key}>
            <div className="u-well">
              <div className='rp-font'>
                {each.userName} <span className='rp-sp'> {' '}  {' '} </span>
                {moment(each.auditTimestamp).format('DD-MM-YYYY hh:mm:ss a')}
              </div>
              <div className='rp-font-comment'>
                {each.auditComment}
              </div>
            </div>
          </div>)
        )}
      </React.Fragment>);
    }
  }

  public render() {
    const { handleSubmit, submitting } = this.props;
    const { activeTab } = this.state;
    return (
      <div className="c-modal" style={{ minHeight: '70%' }}>
          <div className="c-modal__view">
            <div className="c-modal__head">
              <legend className="c-modal__title">
                New Organization Unit
              </legend>
            </div>
            <div className="c-modal__body">
            <div className="c-tabs js-tabs">
              <nav className="c-tabs__nav">
                <ul className="c-tabs__list">
                  <li className="c-tabs__title">
                    <button className={`c-tabs__link u-text-medium js-tabs-link ${ activeTab === tabName.GENERAL && 'is-active'}`}
                      name={tabName.GENERAL} onClick={this.changeTab}>
                      {formatMessage('admin.general')}
                    </button>
                  </li>
                  <li className="c-tabs__title">
                    <button className={`c-tabs__link u-text-medium js-tabs-link ${ activeTab === tabName.HISTORY && 'is-active'}`}
                      name={tabName.HISTORY} onClick={this.changeTab}>
                      {formatMessage('admin.history')}
                    </button>
                  </li>
                </ul>
              </nav>
              <form onSubmit={handleSubmit(this.editOrgUnitSubmit)}>
                <div className="c-tabs__content" style={{minHeight: '400px', overflowY: 'auto'}}>
                  <div className="c-tabs__item js-tabs-content is-active">
                    <div className="c-modal__body">
                      {this.renderContent()}
                    </div>
                  </div>
                </div>
                <div className="c-modal__foot">
                  <div className="c-modal__actions c-modal__actions--secondary">
                    <button className="o-btn u-accent-color" type="button" onClick={this.props.onHide}>
                      {formatMessage('global.cancel')}
                    </button>
                  </div>
                  <div className="c-modal__actions">
                    <button className="o-btn o-btn--primary" disabled={submitting} type="submit">
                      {formatMessage('global.apply')}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            </div>
          </div>
      </div>
    );
  }
}

const addOrgUnitValidate = (formProps) => {
  // todo: validation
  const errors: any = {}
  if (!formProps.name) {
      errors.name = 'Required';
  }
  if (!formProps.code) {
      errors.code = 'Required';
  }
  
  console.log('err..', errors)
  return errors
};

export default reduxForm<any, IntProps>({
  form: 'addOrgUnit',
  validate: addOrgUnitValidate
})(EditOrgUnit);
