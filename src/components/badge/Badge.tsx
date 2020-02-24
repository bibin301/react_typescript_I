import * as React from 'react';

import 'src/common/css/mockcss/style.css';

interface Props {
  value: string,
  className?: string
}

const Badge:React.SFC<Props> = (props) => {
  const {
    value,
    className
  } = props;

  return (
    <div>
      <span className={className}>{value}</span>
    </div>
  );
}

Badge.defaultProps = {
  className: ''
}

export default Badge;
