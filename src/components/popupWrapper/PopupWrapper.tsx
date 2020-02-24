import * as  React from 'react';

interface Props {
  toggleFilterRemove: () => void
}

export default class PopupWrapper extends React.Component<Props, null> {

  private _wrapperRef = null;

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  /**
	 * Set the wrapper ref
	 */
  private setWrapperRef(node) {
    this._wrapperRef = node;
  }

  /**
	 * Alert if clicked on outside of element
	 */
  private handleClickOutside(event) {
    if (this._wrapperRef && !this._wrapperRef.contains(event.target)) {
      this.props.toggleFilterRemove();
    }
  }

  render() {
    return (
      <div ref={this.setWrapperRef}>
        {this.props.children}
      </div>
    );
  }
}
