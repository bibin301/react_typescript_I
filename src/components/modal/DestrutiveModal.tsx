import * as React from 'react';
import Attribute from './../attribute/Attribute';


interface IntProps {
  title: string,
  header: string,
  term: string,
  value: string,
  onCancel: () => void,
  onDelete: () => void
}
interface IntState {

}
export default class DestrutiveModal extends React.Component <IntProps, IntState> {
  public render(){
    const { title, header, term, value, onCancel, onDelete } = this.props;
    return(
      <div className="c-modal">
        <div className="c-modal__view">
          <div className="c-modal__head">
            <legend className="c-modal__title">
              {title}
            </legend>
          </div>
          <div className="c-modal__body">
            <p>{header}</p>
            <Attribute
              term={term}
              value={value} />
          </div>
          <div className="c-modal__foot">
            <div className="c-modal__actions c-modal__actions--secondary">
              <button className="o-btn u-accent-color" type="button" onClick={onCancel} >
                cancel
              </button>
            </div>
            <div className="c-modal__actions">
              <button className="o-btn o-btn--destructive u-negative"  type="button" onClick={onDelete}>
                delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}