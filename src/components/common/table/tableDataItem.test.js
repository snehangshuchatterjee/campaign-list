import React from 'react';
import { shallow } from 'enzyme';

import TableDataItemComponent from './tableDataItem';
import ActiveStatusComponent from '../activeStatus';

import { TABLE_HEADINGS } from '../../../constants/tableHeadings';

describe("Table Data Item Component", () => {
    let wrapper, headings, data, isActive;
    beforeEach(() => {
        headings = TABLE_HEADINGS;
        data = {
            "a": "sjh",
            "b": "shjkd",
            "c": "sjh",
            "Budget": 123456
        };
        isActive = true;
        wrapper = shallow(<TableDataItemComponent headings={headings}
            data={data}
            isActive={isActive}
        />);
    });

    it("should be rendered properly without crashing", () => {
        expect(wrapper.find("td").length).toEqual(5);
    });

    it("should display 'ActiveStatusComponent' if the headings contain 'Active'", () => {
        let data = {
            name: "test",
            "Budget": 123456
        }
        wrapper = shallow(<TableDataItemComponent headings={headings}
            data={data}
            isActive={isActive}
        />);
        expect(wrapper.find(ActiveStatusComponent).length).toEqual(1);
    });
});