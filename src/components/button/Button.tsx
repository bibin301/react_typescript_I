import * as React from 'react';

import 'src/common/css/mockcss/style.css';

interface Props {
  disabled?: boolean,
  onClick?: any,
  className?: string,
  id?: any,
  name?: string,
  attention?: boolean,
  href?: string,
  target?: string,
  varients?: string,
  ariaLabel?: string
}

const Button: React.SFC<Props> = (props) => {
  const { varients, children, disabled, onClick, id, name, attention, href, target, ariaLabel } = props;
  const className = attention ? 'u-attention-required' : '';
  switch (varients) {
    case 'withIcon':
      return (
        <button className={`o-btn ${className}`} type="button" disabled={disabled} onClick={onClick} id={id} name={name}>
          {children}
        </button>
      );
    case 'link':
      return (
        <a className='o-btn' href={href} target={target}>
          {children}
        </a>
      );
    case 'primary':
      return (
        <button className={`o-btn o-btn--primary ${className}`} type="button" disabled={disabled} onClick={onClick} id={id} name={name}>
          {children}
        </button>
      );
    case 'neutral':
      return (
        <button className={`o-btn  o-btn--neutral ${className}`} type="button" disabled={disabled} onClick={onClick} id={id} name={name}>
          {children}
        </button>
      );
    case 'transparent':
      return (
        <button className={`o-btn  o-btn--transparent ${className}`} type="button" disabled={disabled} onClick={onClick} id={id} name={name}>
          {children}
        </button>
      );
    case 'inline':
      return (
        <button className={`o-btn  o-btn--inline ${className}`} type="button" disabled={disabled} onClick={onClick} id={id} name={name}>
          {children}
        </button>
      );
    case 'iconOnly':
      return (
        <button className={`o-btn  o-btn--tooltip ${className}`} type="button" disabled={disabled} onClick={onClick} id={id} name={name} aria-label={ariaLabel}>
          {children}
        </button>
      );
    case 'iconOnlyRight':
      return (
        <button className={`o-btn  o-btn--tooltip o-btn--tooltip-right ${className}`} type="button" disabled={disabled} onClick={onClick} id={id} name={name} aria-label={ariaLabel}>
          {children}
        </button>
      );
    case 'concealed':
      return (
        <button className={`o-btn  o-btn--concealed o-btn--tooltip ${className}`} type="button" disabled={disabled} onClick={onClick} id={id} name={name} aria-label={ariaLabel}>
          {children}
        </button>
      );
    // todo: two child caanot be sent as children . find a new way
    // case 'isEffective':
    //   return (
    //     <div className="o-btn-wrapper js-effective-btn">
    //       <button className="o-btn u-attention-required" type="button">
    //         {childOne}
    //       </button>
    //       <button className="o-btn o-btn--warning">
    //         {childTwo}
    //       </button >
    //     </div >
    //   );
    case 'textField':
      return (
        <button className={`o-btn  o-btn--text-lookalike ${className}`} type="button" disabled={disabled} onClick={onClick} id={id} name={name}>
          {children}
        </button>
      );
    case 'positive':
      return (
        <button className={`o-btn o-btn--positive u-positive o-btn--tooltip ${className}`} type="button" disabled={disabled} onClick={onClick} id={id} name={name} aria-label={ariaLabel}>
          {children}
        </button>
      );
    case 'destructive':
      return (
        <button className={`o-btn o-btn--destructive u-negative o-btn--tooltip ${className}`} type="button" disabled={disabled} onClick={onClick} id={id} name={name} aria-label={ariaLabel}>
          {children}
        </button>
      );
    // todo: two child caanot be sent as children . find a new way
    // case 'multiBtn':
    //   return (
    //     <div className="c-multi-btn">
    //       <button className="o-btn o-btn--tooltip c-multi-btn__item is-active" type="button" aria-label={ariaLabel}>
    //       {childOne}
    //       </button>
    //       <button className="o-btn o-btn--tooltip c-multi-btn__item" type="button" aria-label="Table view">
    //       {childTwo}
    //       </button >
    //     </div >
    //   );
    default:
      return (
        <button className='o-btn' type="button" disabled={disabled} onClick={onClick} id={id} name={name}>
          {children}
        </button>
      );
  }
}


Button.defaultProps = {
  disabled: false,
  className: '',
  id: null,
  name: '',
  varients: '',
  attention: false,
  href: '#',
  target: '_self'
}

export default Button;
