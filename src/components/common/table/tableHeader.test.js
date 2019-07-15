import React from 'react';
import { shallow } from 'enzyme';

import TableHeaderComponent from './tableHeader';

import { TABLE_HEADINGS } from '../../../constants/tableHeadings';

describe("Table Header Component", () => {
    it("should display the component properly without rendering", () => {
        const wrapper = shallow(<TableHeaderComponent headings={TABLE_HEADINGS} />);
        expect(wrapper.find("thead").length).toEqual(1);
    });
});