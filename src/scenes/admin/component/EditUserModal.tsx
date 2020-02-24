import * as React from 'react';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { assign as _assign, map as _map, find as _find } from 'lodash';

import { Country } from '../../../model/admin/country';

import { updateUserInformation, duplicateUserInformation } from './../../../service/admin/action';
import { formatMessage } from './../../../common/translation/Translate';
import * as  moment from 'moment';

/* ****************** CONSTANT SHOULD BE HANDLE SOMEWHERE **************** */
const tabName = {
  GENERAL: 'general',
  SECURITY: 'security',
  HISTORY: 'history'
}
const pwdExpPeriod= [
  {
    value: '0',
    label: 'Daily'
  }, {
    value: '1',
    label: 'Weekly'
  }, {
    value: '2',
    label: 'Monthly'
  }, {
    value: '3',
    label: 'Quarterly'
  }, {
    value: '4',
    label: 'Half Yearly'
  }, {
    value: '5',
    label: 'Yearly'
  }
];
const maxInActiveTime= [
  {
    value: '0',
    label: 'Day'
  }, {
    value: '1',
    label: 'Month'
  }, {
    value: '2',
    label: 'Quarter'
  }, {
    value: '3',
    label: 'Half Year'
  }, {
    value: '4',
    label: 'Year'
  }
];
/* *********************************************************************** */

interface IntProps {
  activeID: number,
  activeUserID: string,
  activeUserName: string,
  isDuplicatUser: boolean,
  disableHistory: boolean,
  availableLists: any,
  orgUnitId?: number,
  availablePerms: number[],
  userUpdateHistory: any,
  lookupCountryList: Array<Country>,
  onHide: () => any,
  general: any
}
interface IntState {
  activeTab: string
}

class EditUserModal extends React.Component<InjectedFormProps<any, IntProps> & IntProps, IntState> {
  public static defaultProps: Partial<IntProps> = {
    orgUnitId: null,
  }
  state = {
    activeTab: tabName.GENERAL
  }

  componentDidMount() {
      this.handleFormInitialValues();
  }

  private handleFormInitialValues = () => {
    const { general } = this.props;
    this.props.initialize({
      name: general.name,
      firstName: general.firstName,
      lastName: general.lastName,
      email: general.email,
      phone: general.phone,
      country: general.country && general.country.name,
      password: general.password,
      verifyPassword: general.password,
      active: general.active,
      locked: general.locked,
      maxInactivetime: general.mit,
      passwordEP: general.pep
    });
  }
  private changeTab = (event: any ) => {
    this.setState({activeTab: event.target.name});
  }

  private editUserSubmit = (formValues) => {
    const { general, activeID, activeUserID, activeUserName, availableLists, orgUnitId, availablePerms, lookupCountryList } = this.props;
    formValues.country = _find(lookupCountryList, {'name': formValues.country})
    const userDTO = _assign({}, general, formValues)
    this.props.isDuplicatUser
      ? duplicateUserInformation(activeUserName, activeID, activeUserID, availableLists, availablePerms, orgUnitId, userDTO)
      : updateUserInformation(activeUserName, activeID, activeUserID, availableLists, availablePerms, orgUnitId, userDTO);
    this.props.onHide();
  }


  private renderContent = () => {
    const { activeTab } = this.state;
    
    switch (activeTab) {
      case tabName.GENERAL:
        return (<React.Fragment>
          <div className="c-form__field">
            <label className="o-label c-form__label" style={{ marginTop: '6px' }}>
              User Name
            </label>
            <Field
              name='name'
              type="input"
              component="input"
              className="o-input c-form__input" />
          </div>
          <div className="c-form__field">
            <label className="o-label c-form__label" style={{ marginTop: '6px' }}>
              First Name
            </label>
            <Field
              name='firstName'
              type="input"
              component="input"
              className="o-input c-form__input" />
          </div>
          <div className="c-form__field">
            <label className="o-label c-form__label" style={{ marginTop: '6px' }}>
              Last Name
            </label>
            <Field
              name='lastName'
              type="input"
              component="input"
              className="o-input c-form__input" />
          </div>
          <div className="c-form__field">
            <label className="o-label c-form__label" style={{ marginTop: '6px' }}>
              Location
            </label>
            <Field
              name='country'
              component="select"
              className="o-select" >
              <option value={null}> </option>
              {_map(this.props.lookupCountryList, (each, i) => (
                <option key={i} value={each.name}>{each.name}</option>)
              )}
            </Field>
          </div>
          <div className="c-form__field">
            <label className="o-label c-form__label" style={{ marginTop: '6px' }}>
              Email
            </label>
            <Field
              name='email'
              type="input"
              component="input"
              className="o-input c-form__input" />
          </div>
          <div className="o-section-title">
            <div className="c-form__field">
              <label className="o-label c-form__label" style={{ marginTop: '6px' }}>
                Phone
              </label>
              <Field
                name='phone'
                type="input"
                component="input"
                className="o-input c-form__input" />
            </div>
          </div>
    
          <div className="c-form__field">
            <label className="o-label c-form__label" style={{ marginTop: '6px' }}>
            Password:
            </label>
            <Field
              name='password'
              type="password"
              component="input"
              className="o-input c-form__input" />
          </div>
          <div className="c-form__field">
            <label className="o-label c-form__label" style={{ marginTop: '6px' }}>
              Verify Password:
            </label>
            <Field
              name='verifyPassword'
              type="password"
              component="input"
              className="o-input c-form__input" />
          </div>
          <div className="c-form__field">
            <label className="o-label c-form__label" style={{ marginTop: '6px' }}>
              Password Expiry Period: 
            </label>
            <Field
              name='passwordEP'
              component="select"
              style={{ maxWidth:'none', width: '100%', marginTop: '6px' }}
              className="o-input c-form__input">
              {_map(pwdExpPeriod, (each, i) => (
                <option key={i} value={each.value}>{each.label}</option>)
              )}
            </Field> 
          </div>
          <div className="c-form__field">
            <label className="o-label c-form__label" style={{ marginTop: '6px' }}>
              Maximun Inactive Time:
            </label>
            <Field
              name='maxInactivetime'
              component="select"
              style={{ maxWidth:'none', width: '100%', marginTop: '6px' }}
              className="o-input c-form__input">
              {_map(maxInActiveTime, (each, i) => (
                <option key={i} value={each.value}>{each.label}</option>)
              )}
            </Field>       
          </div>
          <div className="c-form__field  c-form__field--inline" style={{ border: '2px solid #dddddd', padding: '5px' }}>
            <Field
              name='active'
              type="checkbox"
              component="input"
              style={{ maxWidth:'none', marginTop: '6px' }} />
              <label className="o-label c-form__label" style={{ marginTop: '3px' , marginLeft: '10px' , position: 'absolute' , left:'5%'}}>
              Active
            </label>
          </div>
          <div className="c-form__field c-form__field--inline" style={{ border: '2px solid #dddddd', padding: '5px' }}>
            <Field
              name='locked'
              type="checkbox"
              component="input"
              style={{ maxWidth:'none', marginTop: '6px' }} />
              <label className="o-label c-form__label" style={{ marginTop: '3px' , marginLeft: '10px' , position: 'absolute' , left:'5%'}}>
              Locked
            </label>
          </div>
        </React.Fragment>);
      case tabName.SECURITY:
        return (<React.Fragment>
          security to be integrate here
        </React.Fragment>);
      case tabName.HISTORY:
        return (<React.Fragment>
          {_map( this.props.userUpdateHistory, (each, key)=> (
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
                {'  '}
                {' '}
              </div>
            )
          )}
        </React.Fragment>);
    }
  }
  public render(){
    const { activeTab } = this.state;
    const { handleSubmit, submitting, general, disableHistory } = this.props;

    return (
      <div className="c-modal" style={{ minHeight: '90%'}}>
        <div className="c-modal__view">
          <div className="c-modal__head">
            <legend className="c-modal__title">
              Edit User: {general.name}
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
                    <button className={`c-tabs__link u-text-medium js-tabs-link ${ activeTab === tabName.SECURITY && 'is-active'}`}
                      name={tabName.SECURITY} onClick={this.changeTab}>
                      {formatMessage('admin.security')}
                    </button>
                  </li>
                  {!disableHistory && <li className="c-tabs__title">
                    <button className={`c-tabs__link u-text-medium js-tabs-link ${ activeTab === tabName.HISTORY && 'is-active'}`}
                      name={tabName.HISTORY} onClick={this.changeTab}>
                      {formatMessage('admin.history')}
                    </button>
                  </li>}
                </ul>
              </nav>
              <form onSubmit={handleSubmit(this.editUserSubmit)}>
                <div className="c-tabs__content" style={{height: '400px', overflowY: 'auto'}}>
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

const editUserModalValidate = (formProps) => {
  // todo: validation
  const errors: any = {}
  if (!formProps.firstName) {
    errors.firstName = 'Required';
  }
  if (!formProps.lastName) {
    errors.lastName = 'Required';
  }
  if (formProps.password !== formProps.verifyPassword) {
    errors.verifyPassword = 'Password Missmatched';
  }
  if (!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(formProps.email)) 
  {
    errors.mail = 'Invalid Email Address'
  }
  console.log('edit user er..', errors)
  return errors
};
export default reduxForm<any, IntProps> ({
  form: 'editUserModal',
  validate: editUserModalValidate
})(EditUserModal);

