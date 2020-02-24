import * as React from 'react';
import { reduxForm, InjectedFormProps } from 'redux-form';
import { assign as _assign } from 'lodash';

import { deleteGroupsInformation } from './../../../service/admin/action';
import { formatMessage } from './../../../common/translation/Translate';
import * as moment from 'moment';

/* ****************** CONSTANT SHOULD BE HANDLE SOMEWHERE **************** */

/* *********************************************************************** */

interface IntProps {
    user: any,
    onHide: () => any,
    general: any
}


class DeleteGroupsModal extends React.Component<InjectedFormProps <any, IntProps> & IntProps> {
    componentDidMount() {
        this.handleFormInitialValues();
    }

    private handleFormInitialValues = () => {
        this.props.initialize({
            adminGroup: "",
            description: "",
            email: "",
            active: "",
            createdBy: "",
            createdDate: "",
            updatedBy: "",
            lastUpdateDate: ""
        });
    }

    private deleteUserSubmit = (formValues) => {

        const { general, user } = this.props;
        const userDTO = _assign({}, general, formValues)
        deleteGroupsInformation(userDTO, user, general.description)
        this.props.onHide();

    }

    public render() {

        const { handleSubmit, submitting, general } = this.props;

        return (
            <div className="c-modal" style={{ maxHeight: '90%' }}>
                <div className="c-modal__view">
                    <div className="c-modal__head">
                        <legend className="c-modal__title">
                            Delete Group
            </legend>
                    </div>
                    <div className="c-modal__body">
                        <div className="c-tabs js-tabs">
                            <div>Are you sure you want to delete this group?</div>
                            <form onSubmit={handleSubmit(this.deleteUserSubmit)}>
                                <div className="c-tabs__content" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                                    <div className="c-tabs__item js-tabs-content is-active">
                                        <div className="c-modal__body">
                                            <div className='rp-space'>
                                                <div className="u-well">
                                                    <div className='rp-font-comment'>
                                                        Head of compliance
                                                    </div>
                                                    <div className='rp-font'>
                                                        Email : {general.email}

                                                    </div>
                                                    <div className='rp-font'>
                                                        Last update date :  {moment(general.updatedOn).format('DD-MM-YYYY hh:mm:ss a')}

                                                    </div>
                                                </div>
                                                {'  '}
                                                {' '}
                                            </div>

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
            </div>
        );
    }
}

export default reduxForm<any, IntProps>({
    form: 'editGroupsModal'
})(DeleteGroupsModal);

