import React from 'react';
import PropTypes from 'prop-types';
import ActiveStatusComponent from '../activeStatus';

const TableDataItemComponent = (props) => {
    const { headings, data, isActive } = props;
    const dataHeadingKeys = Object.keys(headings);
    console.log(JSON.stringify(data));
    return (
        <tr>
            {dataHeadingKeys.map((heading) => {
                if (heading === 'active') {
                    return (
                        <td>
                            <ActiveStatusComponent isActive={isActive} />
                        </td>
                    );
                }
                else {
                    return (
                        <td>{data[heading] ? data[heading] : ""}</td>
                    );
                }
            })}
        </tr>
    );
}

export default TableDataItemComponent;

TableDataItemComponent.propTypes = {
    headings: PropTypes.arrayOf(PropTypes.string),
    data: PropTypes.object
}