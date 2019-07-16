import React from 'react';
import { shallow } from 'enzyme';

import TableDataComponent from './tableData';

import { TABLE_HEADINGS } from '../../../constants/tableHeadings';
import TableDataItemComponent from './tableDataItem';

describe("Table Data Component", () => {
    it("should display the component properly without rendering", () => {
        let data = [
            {
                "id": 1, "name": "Divavu", "startDate": "9/19/2017", "endDate": "3/9/2018", "Budget": 88377
            },
            {
                "id": 2, "name": "Jaxspan", "startDate": "11/21/2017", "endDate": "2/21/2018", "Budget": 608715
            }
        ];
        const wrapper = shallow(<TableDataComponent headings={TABLE_HEADINGS} data={data} />);
        expect(wrapper.find("tbody").length).toEqual(1);
    });

    it("should call the Table Data Component with isActive = true if end Date is after current date", () => {
        let data = [
            {
                "id": 1, "name": "Divavu", "startDate": "9/19/2017", "endDate": "12/9/2019", "Budget": 88377
            }
        ];
        const wrapper = shallow(<TableDataComponent headings={TABLE_HEADINGS} data={data} />);
        expect(wrapper.find(TableDataItemComponent).props().isActive).toEqual(true);
    });

    it("should return an empty component if start date is after end date", () => {
        let data = [
            {
                "id": 1, "name": "Divavu", "startDate": "9/19/2019", "endDate": "12/9/2018", "Budget": 88377
            }
        ];
        const wrapper = shallow(<TableDataComponent headings={TABLE_HEADINGS} data={data} />);
        expect(wrapper.find(TableDataItemComponent).length).toEqual(0);
    });
});