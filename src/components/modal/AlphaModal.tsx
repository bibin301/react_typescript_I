import * as React from 'react';

interface Props {
  title: string,
  isOpen: boolean,
  changeVisbility: any,
  saveDisabled: any
}

const Modal: React.SFC<Props> = (props) => {

  const { isOpen, title, children, changeVisbility, saveDisabled } = props;

  return (
    isOpen && <div className="c-modal">
      <div className="c-modal__view">
        <div className="c-modal__head">
          <legend className="c-modal__title">
            {title}
          </legend>
        </div>
        <div className="c-modal__body">
          {children}
        </div>
        <div className="c-modal__foot">
          <div className="c-modal__actions c-modal__actions--secondary">
            <button className="o-btn u-accent-color" type="button" onClick={changeVisbility}>
              Cancel
            </button>
          </div>
          {!saveDisabled && <div className="c-modal__actions">
            <button className="o-btn o-btn--primary" type="submit">
              Save
            </button>
          </div>}
        </div>
      </div>
    </div>
  );
}

Modal.defaultProps = {
title: '',
isOpen: null,
}

export default Modal;
