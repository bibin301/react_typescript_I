import * as React from 'react';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { assign as _assign } from 'lodash';

import { addRolesInformation } from './../../../service/admin/action';
import { formatMessage } from './../../../common/translation/Translate';

interface IntProps {
    user: any,
    onHide: () => any,
}

interface IntState {
}

class AddRolesModal extends React.Component<InjectedFormProps<any, IntProps> & IntProps, IntState> {
    componentDidMount() {
        this.handleFormInitialValues();
    }

    private handleFormInitialValues = () => {
        this.props.initialize({
            name: "",
            description: "",
            active: ""

        });
    }

    private addRolesSubmit = (formValues) => {
        const { user } = this.props;
        const userDTO = _assign({}, formValues)
        addRolesInformation(userDTO, user);
        this.props.onHide();
    }

    public render() {
        const { handleSubmit, submitting } = this.props;
        return (
            <div className="c-modal" style={{ maxHeight: '90%', width: '26%' }}>
                <div className="c-modal__view">
                    <div className="" style={{ marginLeft: '40px' }}>
                        <legend className="c-modal__title" style={{ marginTop: '10px' }}>
                        {formatMessage('admin.newRole')}
                        </legend>
                    </div>
                    <div className="c-modal__body">
                        <div className="c-tabs js-tabs">

                            <form onSubmit={handleSubmit(this.addRolesSubmit)}>
                                <div className="c-tabs__content" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                                    <div className="c-tabs__item js-tabs-content is-active">
                                        <div className="c-modal__body">
                                            <div className="c-form__field ">
                                                <label className="o-label c-form__label" style={{ marginTop: '6px' }}>
                                                   Name
                                                </label>
                                                <Field
                                                    name='name'
                                                    type="input"
                                                    component="input"
                                                    placeholder="Name"
                                                    style={{ maxWidth: 'none', width: '100%' }}
                                                    className="o-input c-form__input" />
                                            </div>
                                            <div className="c-form__field ">
                                                <label className="o-label c-form__label" style={{ marginTop: '6px' }}>
                                                    Description
                                                </label>
                                                <Field
                                                    name='description'
                                                    type="input"
                                                    placeholder="Description"
                                                    component="textarea"
                                                    style={{ maxWidth: 'none', width: '100%' }}
                                                    className="o-input c-form__input" />
                                            </div>
                                            <div className="c-form__field c-form__field--inline" style={{ border: '1px solid #dddddd', padding: '6px' }}>

                                                <Field
                                                    name='active'
                                                    type="checkbox"
                                                    component="input"
                                                    style={{ maxWidth: 'none', marginTop: '2px' }} />
                                                <label className='rp-font-comment' style={{ marginTop: '0px', marginRight: '218px', marginBottom: '0px' }}>
                                                    Active
                                                 </label>
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
                                        <button className="o-btn o-btn--primary" disabled={submitting} type="submit">
                                            {formatMessage('global.save')}
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

const addRolesModalValidate = (formProps) => {
    // todo: validation
    const errors: any = {}
    if (!formProps.name) {
        errors.name = 'Required';
    }
    return errors
};

export default reduxForm<any, IntProps> ({
    form: 'addRolesModal',
    validate: addRolesModalValidate
})(AddRolesModal);


