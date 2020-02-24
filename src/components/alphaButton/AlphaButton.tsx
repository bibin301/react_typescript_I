import * as React from 'react';


import 'src/common/css/mockcss/style.css';

interface Props {
  disabled?: boolean,
  onClick?: any,
  className: string,
  id?: any,
  name?: string,
  ariaLabel?: string,
  type?: string
}


const AlphaButton: React.SFC<Props> = (props) => {
  const { className, children, disabled, onClick, id, name, ariaLabel, type } = props;

  return (
    <button className={className} disabled={disabled} onClick={onClick} id={id}
      aria-label={ariaLabel} name={name} type={type}>{children}</button>
  );
}


AlphaButton.defaultProps = {
  disabled: false,
  className: '',
  id: null,
  name: '',
  type: 'button',
  ariaLabel: ''
}

export default AlphaButton;
