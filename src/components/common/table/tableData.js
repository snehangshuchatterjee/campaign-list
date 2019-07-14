import React from 'react';
import PropTypes from 'prop-types';

import TableDataItemComponent from './tableDataItem';

const isActive = (data) => {
    if (new Date(data.endDate) > new Date()) {
        return true;
    }
    else {
        return false;
    }
}

const TableDataComponent = (props) => {
    const { headings, data } = props;
    return (
        <tbody>
            {data.map((dataItem) => {
                let active = isActive(dataItem);
                return (
                    <TableDataItemComponent headings={headings}
                        isActive={active}
                        data={dataItem}
                    />
                );
            })}
        </tbody>
    );
}

export default TableDataComponent;

TableDataComponent.propTypes = {
    headings: PropTypes.arrayOf(PropTypes.string),
    data: PropTypes.arrayOf(PropTypes.object)
}