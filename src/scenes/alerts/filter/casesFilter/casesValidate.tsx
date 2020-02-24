import { map as _map } from 'lodash';

const casesValidate = values => {
  const errors:any = {}
  const filter:any = [];
  _map(values, (each, index) => {
    const filterError:any = {};
    if (!each || !each.field) {
      filterError.field = 'required'
      filter[index] = filterError;
    }
    if (!each || !each.value) {
      filterError.value = 'required';
      filter[index] = filterError;
    }
  })
  if (filter.length) {
    errors.filter = filter
  }
}

export default casesValidate;
