import * as React from 'react';
import { reduxForm, InjectedFormProps } from 'redux-form';
import { assign as _assign } from 'lodash';

import { deleteRolesInformation } from './../../../service/admin/action';
import { formatMessage } from './../../../common/translation/Translate';
import * as  moment from 'moment';

interface IntProps {
    userId: string,
    availableLists: any,
    orgUnitId?: number,
    availablePerms: number[],
    userUpdateHistory: any,
    adminDataList: any,
    onHide: () => any,
    general: any
  }
  interface IntState {
    activeTab: string
  }
  
  class DeleteRolesModal extends React.Component<InjectedFormProps <any, IntProps> & IntProps, IntState> {
    public static defaultProps: Partial<IntProps> = {
      orgUnitId: null,
    }
 
    componentDidMount() {
        this.handleFormInitialValues();
    }
  
    private handleFormInitialValues = () => {
      const { general } = this.props;
      console.log("general",general);
      this.props.initialize({
        name: general.name,
        description: general.description,
        active: general.active
      });
    }

  
    private editUserSubmit = (formValues) => {
      const { general, userId, availableLists, orgUnitId, availablePerms } = this.props;
      const userDTO = _assign({}, general, formValues)
      deleteRolesInformation(general.name, general.id, userId, availableLists, availablePerms, orgUnitId, userDTO);
      this.props.onHide();
    }

    public render(){
      const { handleSubmit, submitting, general } = this.props;
  
      return (
        <div className="c-modal" style={{ maxHeight: '90%'}}>
          <div className="c-modal__view">
            <div className="c-modal__head">
              <legend className="c-modal__title">
                {formatMessage('admin.deleteRole')}
              </legend>
            </div>
              <div className="c-tabs js-tabs c-modal__body">
              <div>{formatMessage('admin.deleteRoleTitle')}</div>
                <form onSubmit={handleSubmit(this.editUserSubmit)}>
                <div className="c-tabs__content" style={{maxHeight: '400px', overflowY: 'auto'}}>
                  <div className="c-tabs__item js-tabs-content is-active">
                    <div className='rp-space'>
                      <div className="u-well">
                        <div className='rp-font'>
                          {general.name}
                        </div>
                        <div className='rp-font-comment'>
                        Last Update date: {moment(this.props.general.updatedOn).format('DD-MM-YYYY hh:mm:ss a')}
                        </div>
                      </div>
                        {'  '}
                        {' '}
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
                <button className="o-btn o-btn--warning" disabled={submitting} type="submit">
                  {formatMessage('global.delete')}
                </button>
              </div>
            </div>
                </form>
              </div>
              
          </div>
        </div>
      );
    }
  }

  export default reduxForm<any, IntProps> ({
    form: 'deleteRolesModal'
  })(DeleteRolesModal);
  
  
