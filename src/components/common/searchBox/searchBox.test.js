import React from 'react';
import { shallow } from 'enzyme';

import SearchBoxComponent from './';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

describe("SearchBox Component", () => {
    let wrapper, handleNameChange, handleButtonClick;
    beforeEach(() => {
        handleNameChange = jest.fn();
        handleButtonClick = jest.fn();

        wrapper = shallow(<SearchBoxComponent handleNameChange={handleNameChange}
            handleButtonClick={handleButtonClick}
        />);
    });

    it("should display the component properly without rendering", () => {
        expect(wrapper.find(InputGroup).length).toEqual(1);
        expect(wrapper.find(FormControl).length).toEqual(1);
        expect(wrapper.find(InputGroup.Append).length).toEqual(1);
    });

    it("should call the onChange method of the Form Control", () => {
        wrapper.find(FormControl).simulate('change', { target: { value: 'Hello' } });
        expect(handleNameChange).toHaveBeenCalled();
    });

    it("should call the onClick method of the Button", () => {
        wrapper.find(Button).simulate('click');
        expect(handleButtonClick).toHaveBeenCalled();
    })
});