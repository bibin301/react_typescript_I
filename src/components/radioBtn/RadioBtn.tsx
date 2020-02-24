import * as  React from 'react';

interface Props {
  name: string,
  label: string,
  onChange?: any,
  checked?: boolean
}

const RadioBtn:React.SFC<Props> = (props) => {
  const { name, label, checked, onChange } = props;

  return (
    <fieldset className='o-radio-button'>
      <input className='o-radio-button__input' type='radio' value={name} name={name} id={name} checked={checked} onChange={onChange}/>
      <label className='o-radio-button__label' htmlFor={name}>
        {label}
      </label>
    </fieldset>
  );
}

RadioBtn.defaultProps = {
  checked: false
}

export default RadioBtn;
