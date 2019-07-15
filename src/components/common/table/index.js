import React from 'react';
import { Table } from "react-bootstrap";
import PropTypes from 'prop-types';

import TableHeaderComponent from './tableHeader';
import TableDataComponent from './tableData';
import { TABLE_HEADINGS } from '../../../constants/tableHeadings';

import './table.css';

const TableComponent = (props) => {
    const { data } = props;
    const headings = TABLE_HEADINGS;
    return (
        <>
            <Table striped bordered hover>
                <TableHeaderComponent headings={headings} />
                <TableDataComponent headings={headings}
                    data={data}
                />
            </Table>
        </>
    );
}

export default TableComponent;

TableComponent.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object)
}