import React from 'react';
import { shallow } from 'enzyme';
import { Container, Row, Col } from 'react-bootstrap';

import DatePickerComponent from '../common/datePicker';
import SearchBoxComponent from '../common/searchBox';
import FilterBodyComponent from './filterBody';

describe("Filter Body Component", () => {
    const wrapper = shallow(<FilterBodyComponent handleStartDateChange={() => { }}
        handleEndDateChange={() => { }}
        handleNameChange={() => { }}
        handleButtonClick={() => { }}
    />)
    describe("render", () => {
        it("should render the component properly without crashing", () => {
            expect(wrapper.find(Container).length).toEqual(1);
            expect(wrapper.find(Row).length).toEqual(1);
            expect(wrapper.find(Col).length).toEqual(3);
        })
    });
});