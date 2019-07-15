import React from 'react';
import { shallow } from 'enzyme';

import ActiveStatusComponent from './';

describe("Active Status Component", () => {
    it("should display 'Active' in the span if 'isActive' is true", () => {
        const wrapper = shallow(<ActiveStatusComponent isActive={true} />);
        expect(wrapper.find("span").text()).toEqual("Active");
    });
    it("should display 'InActive' in the span if 'isActive' is false", () => {
        const wrapper = shallow(<ActiveStatusComponent isActive={false} />);
        expect(wrapper.find("span").text()).toEqual("Inactive");
    });
});