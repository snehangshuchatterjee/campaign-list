import React from 'react';
import { shallow } from 'enzyme';

import DatePickerComponent from './';

import DatePicker from "react-datepicker";

describe("Filter Body Component", () => {
    let wrapper;
    const startDataChange = () => { },
        endDataChange = () => { };
    const inputDate = "11/28/2017";

    beforeEach(() => {

        wrapper = shallow(<DatePickerComponent handleStartDateChange={startDataChange}
            handleEndDateChange={endDataChange}
        />)
    });
    describe("render", () => {
        it("should render the component properly without crashing", () => {
            expect(wrapper.find(DatePicker).length).toEqual(2);
        })
    });
    describe("handleChangeStart", () => {
        it("should set the input date to the state as start date", () => {
            wrapper.instance().handleChangeStart(inputDate);
            expect(wrapper.state().startDate).toEqual(inputDate);
        });
    });
    describe("handleChangeEnd", () => {
        it("should set the input date to the state as end date", () => {
            wrapper.instance().handleChangeEnd(inputDate);
            expect(wrapper.state().endDate).toEqual(inputDate);
        })
    });
});