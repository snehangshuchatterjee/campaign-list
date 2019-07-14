import React from 'react';
import PropTypes from 'prop-types';

const TableHeaderComponent = (props) => {
    const { headings } = props;
    const headingKeys = Object.keys(headings);
    return (
        <thead className="blueBG">
            <tr>
                {headingKeys.map((heading) => {
                    return (
                        <th>{headings[heading]}</th>
                    );
                })}
            </tr>
        </thead>
    );
}

export default TableHeaderComponent;

TableHeaderComponent.propTypes = {
    headings: PropTypes.arrayOf(PropTypes.string)
}