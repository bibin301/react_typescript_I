import * as React from 'react';
import { Field } from 'redux-form';
import { filter as _filter, isEmpty as _isEmpty } from 'lodash';

interface Props {
  index: any,
  member: any,
  allFieldDisplay: any,
  filterTypeSelected: any

}

const FilterFieldType: React.StatelessComponent<Props> = ({ member, allFieldDisplay, filterTypeSelected }) => {

  let switchValue:any = _filter(allFieldDisplay, { 'value': filterTypeSelected });

  switchValue = _isEmpty(switchValue) ? '' : switchValue[0].type;
  switch (switchValue) {
    case 'String':
      return (<fieldset className="c-form__field">
        <Field name={`${member}.value`} component="input" type="text" placeholder="value"
          className="o-input ow-border" />
      </fieldset>);

    case 'Select':
      return (
        <React.Fragment>
          <fieldset className="c-form__field ">
            <Field
              name={`${member}.value`}
              type="select"
              component="select"
              className="o-select ow-wid">
              <option value="true" >True</option>
              <option value="false" >False</option>
            </Field>
          </fieldset>
        </React.Fragment>
      );

    default:
      return (
        <fieldset className="c-form__field">
          <Field name={`${member}.value`} component="input" type="text" placeholder="value"
            className="o-input ow-dis ow-border" />
        </fieldset>
      );
  }
}

export default FilterFieldType;
