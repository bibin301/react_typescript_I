import * as React from 'react';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { assign as _assign } from 'lodash';

import { addAdminOrgUnit } from './../../../service/admin/action';
import { formatMessage } from './../../../common/translation/Translate';


interface IntProps {
  user: any,
  onHide: () => any
}

interface IntState {
}

class AddOrgUnitModel extends React.Component<InjectedFormProps<any, IntProps> & IntProps, IntState> {

componentDidMount() {
  this.handleFormInitialValues();
}

private handleFormInitialValues = () => {
  this.props.initialize({
    id: 0,
    links: [],
    parentId: 1,
    name: null,
    description: null,
    code: null,
    associatedCurrency: null,
    associatedBIC: null,
  });
}

  private addOrgUnitSubmit = (formValues) => {
      const { user } = this.props;
      const orgUnit = _assign({}, formValues)
      console.log('submit ad..', orgUnit)
      addAdminOrgUnit(orgUnit, user);
      this.props.onHide();
  }

  public render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <div className="c-modal" style={{ minHeight: '70%' }}>
          <div className="c-modal__view">
            <div className="c-modal__head">
              <legend className="c-modal__title">
                New Organization Unit
              </legend>
            </div>
            <div className="c-modal__body">
              <form onSubmit={handleSubmit(this.addOrgUnitSubmit)}>
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
})(AddOrgUnitModel);

