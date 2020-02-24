import * as React from 'react';
import 'src/common/css/mockcss/style.css';
import 'src/common/css/owncss/style.css';

interface Props {
  disabled: boolean,
  input: any,
  label: string,
  type: string,
  customClass: string,
  placeholder: string,
  meta: {
    touched: boolean,
    error: string,
    warning: string
  }
}
const Input: React.SFC<Props> = (props) => {
  const {
    input,
    label,
    type,
    disabled,
    customClass,
    placeholder,
    meta: { touched, error, warning } } = this.props;

    /* eslint-disable */
    const className = touched && error == 'Invalid email address' || touched && error == 'Required' ? "error" : "success";
    /* eslint-enable */

    return (
      <div>
        <label>
          {label}
        </label>
        <div>
          <input {...input} placeholder={placeholder} type={type} className={`${customClass} ${className}`} disabled={disabled} />
          <br />
          {touched &&
            ((error &&
              <span className='showError'>
                {error}
              </span>) ||
              (warning &&
                <span>
                  {warning}
                </span>))}
        </div>
          </div>
        );
}

Input.defaultProps = {
  disabled: false,
  input: null,
  label: '',
  type: '',
  customClass: '',
  placeholder: ''
};
