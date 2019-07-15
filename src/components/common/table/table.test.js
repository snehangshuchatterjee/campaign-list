import React from 'react';
import { shallow } from 'enzyme';

import TableComponent from './';

import { TABLE_HEADINGS } from '../../../constants/tableHeadings';
import { Table } from 'react-bootstrap';
import TableHeaderComponent from './tableHeader';
import TableDataComponent from './tableData';

describe("Table Component", () => {
    it("should display the component properly without rendering", () => {
        const data = [
            {
                "id": 1, "name": "Divavu", "startDate": "9/19/2017", "endDate": "3/9/2018", "Budget": 88377
            },
            {
                "id": 2, "name": "Jaxspan", "startDate": "11/21/2017", "endDate": "2/21/2018", "Budget": 608715
            }
        ];
        const wrapper = shallow(<TableComponent data={data} />);
        expect(wrapper.find(Table).length).toEqual(1);
        expect(wrapper.find(TableHeaderComponent).length).toEqual(1);
        expect(wrapper.find(TableDataComponent).length).toEqual(1);
    });
});