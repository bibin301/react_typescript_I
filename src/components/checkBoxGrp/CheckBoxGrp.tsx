import * as React from 'react';
import {map as _map, includes as _includes} from 'lodash';

import CheckBox from '../checkBox/CheckBox';

interface Props {
  keyValues?: boolean,
  checkList: any,
  onChange?: any,
  asName?: string,
  asLabel?: string,
  asDisabled?: any,
  asChecked?: any
}

const CheckBoxGrp: React.SFC<Props> = (props) => {
  const { keyValues, checkList, asName, asLabel, asChecked, asDisabled, onChange } = props;
  return (
    <div className='g-toggles'>
      {keyValues
        ? _map(checkList, (value, key) =>
          <CheckBox key={key} name={key} label={value}
            checked={_includes(asChecked, key)}
            disabled={_includes(asDisabled, key)}
            onChange={onChange} />)
        : _map(checkList, (each, i) =>
          <CheckBox key={i} name={each[asName]} label={each[asLabel]}
            checked={_includes(asChecked, each[asName])}
            disabled={_includes(asDisabled, each[asName])}
            onChange={onChange} />)
      }
    </div>
  );
}

CheckBoxGrp.defaultProps = {
  keyValues: false,
  asName: '',
  asLabel: '',
  asChecked: [],
  asDisabled: []
}

export default CheckBoxGrp;
