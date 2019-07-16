import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

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
                const { startDate, endDate } = dataItem
                if (new Date(startDate) > new Date(endDate)) {
                    return null;
                }
                let active = isActive(dataItem);
                return (
                    <TableDataItemComponent headings={headings}
                        isActive={active}
                        data={dataItem}
                        key={uuid.v4()}
                    />
                );
            })}
        </tbody>
    );
}

export default TableDataComponent;

TableDataComponent.propTypes = {
    headings: PropTypes.object,
    data: PropTypes.arrayOf(PropTypes.object)
}