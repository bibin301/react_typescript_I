import * as  React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { FieldArray, reduxForm, reset, formValueSelector } from 'redux-form';

import RenderFilter from 'src/scenes/alerts/filter/components/renderFilter';
import validate from 'src/scenes/alerts/filter/casesFilter/casesValidate';
import { RootStore } from '../../../../store/rootReducer';

interface Props {
  allProps: any,
  fieldTypeSelected: any,
  resetForm: any,
  handleSubmit: any
}

interface State {

}

class CasesFilter extends React.Component<Props, State> {
  render() {
    let { allProps, fieldTypeSelected, resetForm, handleSubmit } = this.props;

    // only one props can pass to fieldArray so added these props to allProps object.
    allProps['fieldTypeSelected'] = fieldTypeSelected;
    allProps['resetForm'] = resetForm;
    allProps['handleSubmit'] = handleSubmit;

    return (
      <FieldArray name="filter" component={RenderFilter} props={allProps} rerenderOnEveryChange />
    );
  }
}
const selector = formValueSelector('casesFilter')

const mapStateToProps = (state: RootStore) => ({
  fieldTypeSelected: selector(state, 'filter')
})

const mapDispatchToProps = (dispatch: Dispatch<State>) => ({
  resetForm: () => dispatch(reset('casesFilter'))
})

const CasesFilterConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(CasesFilter);

export default reduxForm({
  form: 'casesFilter',
  validate
})(CasesFilterConnected)
