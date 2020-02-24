import * as React from 'react';
import { map as _map } from 'lodash';

interface Props {
    input: string,
    meta: { touched: boolean, error: string },
    options: any
}
const Select: React.SFC<Props> = (props) => {

    const { meta: { touched, error }, input, options, ...remainingProps } = props;

    return (
        <React.Fragment>
            <select {...input} {...remainingProps}>
                <option value="" />
                {_map(options, (opt, index) => (
                    <option key={index} value={opt.value} >{opt.label}</option>
                ))}
            </select>
            {touched && error && <span>{error}</span>}
        </React.Fragment>
    )
}

export default Select;