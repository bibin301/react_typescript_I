import * as  React from 'react';

interface Props {
  name?: string,
  label?: string,
  type?: string,
  onChange?: any,
  id?: any,
  checked?: boolean,
  disabled?: boolean
}

const CheckBox: React.SFC<Props> = (props) => {
  const { name, label, checked, onChange, disabled, type, id } = props;

  return (
    <fieldset className='o-toggle '>
      <input className='o-toggle__checkbox ' type={type} value={name} name={name}
        id={id || name} checked={checked} disabled={disabled} onChange={onChange} />
      <label className='o-toggle__label' htmlFor={name}>
        {label}
      </label>
    </fieldset>
  );
}

CheckBox.defaultProps = {
  checked: false,
  disabled: false,
  type: 'checkbox'
}

export default CheckBox;
