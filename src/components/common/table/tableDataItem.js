import React from 'react';
import PropTypes from 'prop-types';
import ActiveStatusComponent from '../activeStatus';

import { abbreviateNumber } from "../../../utils/mathUtils";


const TableDataItemComponent = (props) => {
    const { headings, data, isActive } = props;
    const dataHeadingKeys = Object.keys(headings);

    return (
        <tr>
            {dataHeadingKeys.map((heading) => {
                if (heading === 'active') {
                    return (
                        <td key={heading}>
                            <ActiveStatusComponent isActive={isActive} />
                        </td>
                    );
                }
                else if (heading === 'Budget') {
                    let finalBudget = abbreviateNumber(data[heading]);

                    return (
                        <td key={heading}>{finalBudget + " USD"}</td>
                    );
                }
                else {
                    return (
                        <td key={heading}>{data[heading] ? data[heading] : ""}</td>
                    );
                }
            })}
        </tr>
    );
}

export default TableDataItemComponent;

TableDataItemComponent.propTypes = {
    headings: PropTypes.object,
    data: PropTypes.object,
    isActive: PropTypes.bool.isRequired
}