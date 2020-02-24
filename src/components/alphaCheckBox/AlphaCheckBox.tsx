import * as  React from 'react';

interface Props {
  className: string,
  name: string,
  id: any,
  onClick: any,
  checked: boolean
}

interface State {
  isChecked: boolean
}

export default class AlphaCheckBox extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: props.checked
    }
  }
  public static defaultProps: Partial<Props> = {
    className: '',
    name: '',
    id: '',
    checked: false
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.id !== this.props.id) {
      this.setState({ isChecked: false })
    }
  }
  render() {
    const { className, name, id, onClick } = this.props;
    const { isChecked } = this.state;
    const toggleState = () => {
      this.setState({ isChecked: !this.state.isChecked })
    }
    return (
      <input type="checkbox" className={className} name={name} id={id} onClick={(event) => {
        toggleState();
        onClick(event);
      }} checked={isChecked} />
    )
  }
}
