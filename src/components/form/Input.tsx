import * as React from 'react';

interface Props {
  input: string,
  label: string,
  type: string,
  meta: { touched: boolean, error: string }
}
const Input: React.SFC<Props> = (props) => {

  const { meta: { touched, error }, input, type, label, ...remainingProps } = props;

  return (
    <React.Fragment>
      <input {...input} {...remainingProps} type={type} />
      {touched && error && <span>{error}</span>}
    </React.Fragment>
  )
}
Input.defaultProps = {
  type: 'input',
}
export default Input;