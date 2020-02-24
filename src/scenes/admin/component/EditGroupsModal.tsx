import * as React from 'react';
import { reduxForm, Field, FieldsProps, InjectedFormProps } from 'redux-form';
import { assign as _assign, map as _map } from 'lodash';

import { updateGroupsInformation } from './../../../service/admin/action';
import { formatMessage } from './../../../common/translation/Translate';
import * as moment from 'moment';

const tabName = {
  GENERAL: 'general',
  SECURITY: 'security',
  HISTORY: 'history'
}

interface IntProps {
  user: any,
  userUpdateHistory: any,
  onHide: () => any,
  general: any
}

interface IntState {
  activeTab: string
}


class EditGroupsModal extends React.Component<InjectedFormProps <any, IntProps> & IntProps, IntState> {
  state = {
    activeTab: tabName.GENERAL
  }

  componentDidMount() {
    this.handleFormInitialValues();
  }

  private handleFormInitialValues = () => {
    const { general } = this.props;

    this.props.initialize({
      adminGroup: general.name,
      description: general.description,
      email: general.email,
      active: general.active,
      createdBy: general.createdBy,
      createdDate: moment(general.createdOn).format('DD-MM-YYYY hh:mm:ss a'),
      updatedBy: general.updatedBy,
      lastUpdateDate: moment(general.updatedOn).format('DD-MM-YYYY hh:mm:ss a')
    });
  }
  private changeTab = (event: any) => {
    this.setState({ activeTab: event.target.name });
  }

  private editUserSubmit = (formValues) => {
    const { general,  user } = this.props;
    const userDTO = _assign({}, general, formValues)
    updateGroupsInformation(userDTO, user);
    this.props.onHide();
  }

  private renderContent = () => {
    const { activeTab } = this.state;

    switch (activeTab) {
      case tabName.GENERAL:
        return (<React.Fragment>
          <div className="c-form__field c-form__field--inline">
            <label className="o-label c-form__label" style={{ marginTop: '6px' }}>
              Admin Group
            </label>
            <Field
              name='adminGroup'
              type="input"
              component="input"
              style={{ maxWidth: 'none', width: '70%' }}
              className="o-input c-form__input" />
          </div>
          <div className="c-form__field c-form__field--inline">
            <label className="o-label c-form__label" style={{ marginTop: '6px' }}>
              Description
            </label>
            <Field
              name='description'
              type="input"
              component="textarea"
              style={{ maxWidth: 'none', width: '70%' }}
              className="o-input c-form__input" />
          </div>

          <div className="c-form__field c-form__field--inline">
            <label className="o-label c-form__label" style={{ marginTop: '6px' }}>
              Email {}
            </label>
            <Field
              name='email'
              type="input"
              component="input"
              style={{ maxWidth: 'none', width: '70%' }}
              className="o-input c-form__input" />
          </div>

          <div className="c-form__field c-form__field--inline">
            <label className="o-label c-form__label" style={{ marginTop: '6px' }}>
              Active:
            </label>
            <Field
              name='active'
              type="checkbox"
              component="input"
              style={{ maxWidth: 'none', marginTop: '9px', marginRight: '268px' }} />
          </div>
          <div className="c-form__field c-form__field--inline">
            <label className="o-label c-form__label" style={{ marginTop: '6px' }}>
              Created By
            </label>
            <Field
              name='createdBy'
              type="input" disabled="true"
              component="input"
              style={{ maxWidth: 'none', width: '70%' }}
              className="o-input own-c-form__input" />

          </div>
          <div className="c-form__field c-form__field--inline">
            <label className="o-label c-form__label" style={{ marginTop: '6px' }}>
              Created Date
            </label>
            <Field
              name='createdDate'
              type="input"
              component="input" disabled="true"
              style={{ maxWidth: 'none', width: '70%' }}
              className="o-input own-c-form__input" />
          </div>
          <div className="c-form__field c-form__field--inline">
            <label className="o-label c-form__label" style={{ marginTop: '6px' }}>
              Updated By
            </label>
            <Field
              name='updatedBy'
              type="input"
              component="input" disabled="true"
              style={{ maxWidth: 'none', width: '70%' }}
              className="o-input own-c-form__input" />
          </div>
          <div className="c-form__field c-form__field--inline">
            <label className="o-label c-form__label" style={{ marginTop: '6px' }}>
              Last Update Date
            </label>
            <Field
              name='lastUpdateDate'
              type="input" disabled="true"
              component="input"
              style={{ maxWidth: 'none', width: '70%' }}
              className="o-input own-c-form__input" />
          </div>
        </React.Fragment>);
      case tabName.SECURITY:
        return (<React.Fragment>
          security to be integrate here
        </React.Fragment>);
      case tabName.HISTORY:
        return (<React.Fragment>
          {_map(this.props.userUpdateHistory, (each, key) => (
            <div className='rp-space' key={key}>
              <div className="u-well">
                <div className='rp-font'>
                  {each.userName} <span className='rp-sp'> {' '}  {' '} </span>
                  {new Date(each.auditTimestamp).toLocaleDateString()}
                  {new Date(each.auditTimestamp).toLocaleTimeString()}
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
  public render() {
    const { activeTab } = this.state;
    const { handleSubmit, submitting, general } = this.props;

    return (
      <div className="c-modal" style={{ minHeight: '90%' }}>
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
                    <button className={`c-tabs__link u-text-medium js-tabs-link ${activeTab === tabName.GENERAL && 'is-active'}`}
                      name={tabName.GENERAL} onClick={this.changeTab}>
                      {formatMessage('admin.general')}
                    </button>
                  </li>
                  <li className="c-tabs__title">
                    <button className={`c-tabs__link u-text-medium js-tabs-link ${activeTab === tabName.SECURITY && 'is-active'}`}
                      name={tabName.SECURITY} onClick={this.changeTab}>
                      {formatMessage('admin.security')}
                    </button>
                  </li>
                  <li className="c-tabs__title">
                    <button className={`c-tabs__link u-text-medium js-tabs-link ${activeTab === tabName.HISTORY && 'is-active'}`}
                      name={tabName.HISTORY} onClick={this.changeTab}>
                      {formatMessage('admin.history')}
                    </button>
                  </li>
                </ul>
              </nav>
              <form onSubmit={handleSubmit(this.editUserSubmit)}>
                <div className="c-tabs__content" style={{ height: '400px', overflowY: 'auto' }}>
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

const editGroupsModalValidate = (formProps) => {
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
  if (!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(formProps.email)) {
    errors.mail = 'Invalid Email Address'
  }
  return errors
};

export default reduxForm<any, IntProps>({
  form: 'editGroupsModal',
  validate: editGroupsModalValidate
})(EditGroupsModal);

