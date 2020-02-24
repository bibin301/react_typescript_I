import * as React from 'react';
import { Field } from 'redux-form';
import { filter as _filter, isEmpty as _isEmpty } from 'lodash';

interface Props {
  index: any,
  member: any,
  allFieldDisplay: any,
  fieldTypeSelected: any

}

const SetFieldType: React.StatelessComponent<Props> = ({ index, member, allFieldDisplay, fieldTypeSelected }) => {
  let switchValue:any = _filter(allFieldDisplay, { 'name': fieldTypeSelected[index].field });
  switchValue = _isEmpty(switchValue) ? '' : switchValue[0].type;
  switch (switchValue) {
    case 'String':
      return (<fieldset className="c-form__field">
        <Field name={`${member}.value`} component="input" type="text" placeholder="value"
          className="o-input ow-border" />
      </fieldset>);

    case 'Number':
      return (
        <React.Fragment>
          <fieldset className="c-form__field ">
            <Field name={`${member}.value`} component="input" type="number" placeholder="from"
              className="o-input ow-border ow-score" />
            <Field name={`${member}.value1`} component="input" type="number" placeholder="to"
              className="o-input ow-border ow-score ow-flt" />
          </fieldset>
        </React.Fragment>
      );

    case 'Date':
      return (
        <React.Fragment>
          <fieldset className="c-form__field c-form__field--float">
            <div className="c-form__sub-field">
              {/* <label className="o-label" htmlFor="fromDate">From</label> */}
              <Field name={`${member}.value`} component="input" className="o-input o-input--date js-datepicker ow-date ow-border" type="date" id="fromDate" data-format="DD/MM/YYYY" />
            </div>
          </fieldset>
          <fieldset className="c-form__field c-form__field--float ow-flt">
            <div className="c-form__sub-field">
              {/* <label className="o-label" htmlFor="toDate">To</label> */}
              <Field name={`${member}.value1`} component="input" className="o-input o-input--date js-datepicker ow-date ow-border" type="date" id="toDate" data-format="DD/MM/YYYY" />
            </div>
          </fieldset>
        </React.Fragment>
      );
    case 'DateTime':
      return (
        <React.Fragment>
          <fieldset className="c-form__field c-form__field--float">
            <div className="c-form__sub-field">
              {/* <label className="o-label" htmlFor="fromDate">From</label> */}
              <Field name={`${member}.value`} component="input" className="o-input o-input--date js-datepicker ow-date ow-border" type="date" id="fromDate" data-format="DD/MM/YYYY" />
            </div>
          </fieldset>
          <fieldset className="c-form__field c-form__field--float ow-flt">
            <div className="c-form__sub-field">
              {/* <label className="o-label" htmlFor="toDate">To</label> */}
              <Field name={`${member}.value1`} component="input" className="o-input o-input--date js-datepicker ow-date ow-border" type="date" id="toDate" data-format="DD/MM/YYYY" />
            </div>
          </fieldset>
        </React.Fragment>
      );
    case 'PRIORITY':
      return (
        <React.Fragment>
          <fieldset className="c-form__field ">
            <Field
              name={`${member}.value`}
              type="select"
              component="select"
              label="priority"
              className="o-select ow-wid">
              <option value=""></option>
              <option value="0" >Low</option>
              <option value="1" >Medium</option>
              <option value="2" >High</option>
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

export default SetFieldType;
