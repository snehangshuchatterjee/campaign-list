import React from 'react';
import { shallow } from 'enzyme';

import SearchBoxComponent from './';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

describe("SearchBox Component", () => {
    let wrapper, handleNameChange, handleButtonClick;
    beforeEach(() => {
        handleNameChange = jest.fn();

        wrapper = shallow(<SearchBoxComponent handleNameChange={handleNameChange}
            handleButtonClick={handleButtonClick}
        />);
    });

    it("should display the component properly without rendering", () => {
        expect(wrapper.find(InputGroup).length).toEqual(1);
        expect(wrapper.find(FormControl).length).toEqual(1);
    });

    it("should call the onChange method of the Form Control", () => {
        wrapper.find(FormControl).simulate('change', { target: { value: 'Hello' } });
        expect(handleNameChange).toHaveBeenCalled();
    });
});