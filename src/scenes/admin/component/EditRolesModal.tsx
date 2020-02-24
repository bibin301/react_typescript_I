import * as React from 'react';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { assign as _assign, map as _map, isEmpty as _isEmpty } from 'lodash';

import { updateRolesInformation } from './../../../service/admin/action';
import { formatMessage } from './../../../common/translation/Translate';
import * as  moment from 'moment';


/* ****************** CONSTANT SHOULD BE HANDLE SOMEWHERE **************** */
const tabName = {
    GENERAL: 'general',
    SECURITY: 'security',
    HISTORY: 'history'
  }
/* *********************************************************************** */

interface IntProps {
    userId: string,
    availableLists: any,
    orgUnitId?: number,
    availablePerms: number[],
    userUpdateHistory: any,
    userUpdateSecurity: any,
    adminDataList: any,
    onHide: () => any,
    general: any
  }
  interface IntState {
    activeTab: string
  }
  
  class EditRolesModal extends React.Component<InjectedFormProps <any, IntProps> & IntProps, IntState> {
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
        description: general.description,
        active: general.active
      });
    }
    private changeTab = (event: any ) => {
      this.setState({activeTab: event.target.name});
    }
  
    private editUserSubmit = (formValues) => {
      const { general, userId, availableLists, orgUnitId, availablePerms } = this.props;
      const userDTO = _assign({}, general, formValues)
      updateRolesInformation(general.name, general.id, userId, availableLists, availablePerms, orgUnitId, userDTO);
      this.props.onHide();
    }
  
  
    private renderContent = () => {
      const { activeTab } = this.state;
      
      switch (activeTab) {
        case tabName.GENERAL:
          return (<React.Fragment>
            <div className="c-form__field c-form__field--inline">
              <label className="o-label c-form__label" style={{ marginTop: '6px' }}>
                Name
              </label>
              <Field
                name='name'
                type="input"
                component="input"
                style={{ maxWidth:'none', width: '70%' }}
                className="o-input c-form__input" />
            </div>
            <div className="c-form__field c-form__field--inline">
              <label className="o-label c-form__label" style={{ marginTop: '6px' }}>
                Description
              </label>
              <Field
                name='description'
                type="input"
                component="input"
                style={{ maxWidth:'none', width: '70%' }}
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
                style={{ maxWidth:'none', width: '63%', position: 'absolute', marginTop: '6px' }} />
            </div>
            <div className="c-form__field c-form__field--inline">
              <label className="o-label c-form__label" style={{ marginTop: '6px' }}>
                Created By: 
              </label>
              <div style={{ maxWidth:'none', width: '70%', marginTop: '6px' }}>
                {this.props.general.createdBy}
              </div>
            </div>
            <div className="c-form__field c-form__field--inline">
              <label className="o-label c-form__label" style={{ marginTop: '6px' }}>
                Created On: 
              </label>
              <div style={{ maxWidth:'none', width: '70%', marginTop: '6px' }}>
                {moment(this.props.general.createdOn).format('DD-MM-YYYY hh:mm:ss a')}
              </div>
            </div>
            <div className="c-form__field c-form__field--inline">
              <label className="o-label c-form__label" style={{ marginTop: '6px' }}>
                Updated On: 
              </label>
              <div style={{ maxWidth:'none', width: '70%', marginTop: '6px' }}>
                {this.props.general.updatedBy}
              </div>
            </div>
            <div className="c-form__field c-form__field--inline">
              <label className="o-label c-form__label" style={{ marginTop: '6px' }}>
                Updated By: 
              </label>
              <div style={{ maxWidth:'none', width: '70%',marginTop: '6px' }}>
              {moment(this.props.general.updatedOn).format('DD-MM-YYYY hh:mm:ss a')}
              </div>
            </div>
          </React.Fragment>);
        case tabName.SECURITY:
        return (<React.Fragment>
          security to be integrate here
        </React.Fragment>);
        //   if (_isEmpty(this.props.general)) {
        //   return (<div>
        //     {formatMessage('global.noMoreHistory')}
        //   </div>);
        //   }
        //   else{
        //   return (<React.Fragment>
        //     {_map( this.props.general.permission, (each, key)=> {
        //         return(
        //           <div className='rp-space' key={key}>
        //           <div className="u-well">
        //             <div className='rp-font'>
        //               {each.name} <span className='rp-sp'> {' '}  {' '} </span>
        //             </div>
        //           </div>
        //             {'  '}
        //             {' '}
        //           </div>
        //         )
        //       }
        //     )}
        //  </React.Fragment>);
        //  }
        case tabName.HISTORY:
          if (_isEmpty(this.props.userUpdateHistory)) {
          return (<div>
            {formatMessage('global.noMoreHistory')}
          </div>);
          }
          else{
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
    }
    public render(){
      const { activeTab } = this.state;
      const { handleSubmit, submitting, general, userUpdateHistory, userUpdateSecurity,adminDataList } = this.props;
  
      return (
        <div className="c-modal" style={{ minHeight: '90%'}}>
          <div className="c-modal__view">
            <div className="c-modal__head">
              <legend className="c-modal__title">
              {formatMessage('admin.editRole')}: {general.name}
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
                    <li className="c-tabs__title">
                      <button className={`c-tabs__link u-text-medium js-tabs-link ${ activeTab === tabName.HISTORY && 'is-active'}`}
                        name={tabName.HISTORY} onClick={this.changeTab}>
                        {formatMessage('admin.history')}
                      </button>
                    </li>
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
  
  const editRolesModalValidate = (formProps) => {
    // todo: validation
    const errors: any = {}
    if (!formProps.name) {
      errors.name = 'Required';
    }
    if (!formProps.description) {
      errors.description = 'Required';
    }
   return errors
  };
  export default reduxForm<any, IntProps> ({
    form: 'editRolesModal',
    validate: editRolesModalValidate
  })(EditRolesModal);
  
  
