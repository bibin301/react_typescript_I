import * as React from 'react';
import { noop as _noop } from 'lodash';

interface  Props {
  varients?: string,
  label?: string,
  value: string,
  placeHolder?: string,
  name: string,
  onBlur?: any,
  onChange?: any
}
const TextField: React.SFC<Props> = (props) => {
  const { varients, name, value, label, placeHolder, onChange, onBlur } = props;
  // Todo: need to optimize
  switch (varients) {
    case 'hidden-label':
      return (
        <fieldset className="c-form__field">
          <label className="o-label u-visually-hidden c-form__label" htmlFor={name}>{label}</label>
          <input className="o-input c-form__input" type="text" name={name} onChange={onChange} onBlur={onBlur}/>
        </fieldset>);
    case 'placeholder':
      return (
        <fieldset className="c-form__field">
          <label className="o-label u-visually-hidden c-form__label" htmlFor={name}>{label}</label>
          <input className="o-input c-form__input" type="text" name={name} placeholder={placeHolder} onChange={onChange} onBlur={onBlur}/>
        </fieldset>
      );
    case 'placeholder+label':
      return (
        <fieldset className="c-form__field">
          <label className="o-label c-form__label" htmlFor={name}>{label}</label>
          <input className="o-input c-form__input" type="text" name={name} placeholder={placeHolder} onChange={onChange} onBlur={onBlur}/>
        </fieldset>
      );
    case 'multiline':
      return (
        <fieldset className="c-form__field">
          <label className="o-label c-form__label" htmlFor={name}>{label}</label>
          <textarea className="o-input o-input--multiline" name={name} placeholder={placeHolder} onChange={onChange} onBlur={onBlur}/>
        </fieldset>);
    case 'inline':
      return (
        <div className="c-form__field c-form__field--inline">
          <label className="o-label c-form__label" style={{ marginTop: '6px' }} htmlFor={name}>{label}</label>
          <input className="o-input c-form__input" style={{ maxWidth:'none', width: '70%' }} type="text" name={name} onChange={onChange} onBlur={onBlur}/>
        </div>);
    case 'comment-box':
      return (
        <div className="c-comment-box js-comment-box">
          <span className="c-comment-box__placeholder"></span>
          <input className="o-input o-input--bg c-comment-box__input js-comment-box-content"
            name={name} placeholder={placeHolder} value={value} type="text" onChange={onChange} onBlur={onBlur}/>
        </div>
      );
    default:
      return (
        <fieldset className="c-form__field">
          <label className="o-label c-form__label" htmlFor={name}>{label}</label>
          <input className="o-input c-form__input" type="text" name={name} onChange={onChange} onBlur={onBlur}/>
        </fieldset>
      )
  }
}

TextField.defaultProps = {
  varients: 'default',
  label: '',
  value: '',
  placeHolder: '',
  onChange: _noop,
  onBlur: _noop
}

export default TextField;
