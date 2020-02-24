import * as  React from 'react';
import { map as _map } from 'lodash';

import RadioBtn from '../radioBtn/RadioBtn';

interface Props {
  keyValues?: boolean,
  radioList:any,
  onChange: any,
  asName?: string,
  asLabel?: string,
  asChecked: string
}

const RadioBtnGrp: React.SFC<Props> = (props) => {
  const { keyValues, radioList, asName, asLabel, asChecked, onChange } = props;

  return (
    <div className='g-radio-buttons'>
      {keyValues
        ? _map(radioList, (value, key) =>
          <RadioBtn key={key} name={key} label={value} checked={key === asChecked}
            onChange={onChange} />)
        : _map(radioList, (each, i) =>
          <RadioBtn key={i} name={each[asName]} label={each[asLabel]} checked={each[asName] === asChecked}
            onChange={onChange} />)
      }
    </div>
  );
}

RadioBtnGrp.defaultProps = {
  keyValues: false,
  asName: '',
  asLabel: '',
  asChecked: ''
}

export default RadioBtnGrp;
