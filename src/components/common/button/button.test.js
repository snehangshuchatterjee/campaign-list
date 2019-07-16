import React from 'react';
import { shallow } from 'enzyme';

import ButtonComponent from "./";
import { Button } from 'react-bootstrap';

describe("Button Component", () => {
    let wrapper, handleButtonClick;

    beforeEach(() => {
        handleButtonClick = jest.fn();
        wrapper = shallow(<ButtonComponent handleButtonClick={handleButtonClick} />);
    });

    it("should display the button properly without crashing", () => {
        expect(wrapper.find(Button).length).toEqual(1);
    });

    it("should call the onClick method of the Button", () => {
        wrapper.find(Button).simulate('click');
        expect(handleButtonClick).toHaveBeenCalled();
    })
});