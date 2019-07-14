import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import { FilterComponent } from './';
import FilterBodyComponent from './filterBody';

// import { filterData } from '../../actions/manageData';

const mockStore = configureMockStore();

describe("Filter Component", () => {
    let wrapper, store;

    beforeEach(() => {
        const initialState = {
            data: [
                {
                    "id": 1, "name": "Divavu", "startDate": "9/19/2017", "endDate": "3/9/2018", "Budget": 88377
                },
                {
                    "id": 2, "name": "Jaxspan", "startDate": "11/21/2017", "endDate": "2/21/2018", "Budget": 608715
                }
            ],
            filteredData: [
                {
                    "id": 1, "name": "Divavu", "startDate": "9/19/2017", "endDate": "3/9/2018", "Budget": 88377
                },
                {
                    "id": 2, "name": "Jaxspan", "startDate": "11/21/2017", "endDate": "2/21/2018", "Budget": 608715
                }
            ]
        };
        store = mockStore(initialState);

        wrapper = shallow(<FilterComponent store={store} />);
    });

    describe("render", () => {
        it("should render the component properly", () => {
            expect(wrapper.find(FilterBodyComponent).length).toEqual(1);
        });
    });

    describe("handleStartDateChange", () => {
        it("should store the startDate value to the state", () => {
            let currentDate = new Date();
            wrapper.instance().handleStartDateChange(currentDate);
            expect(wrapper.state().startDate).toEqual(currentDate);
        });
    });

    describe("handleEndDateChange", () => {
        it("should store the startDate value to the state", () => {
            let currentDate = new Date();
            wrapper.instance().handleEndDateChange(currentDate);
            expect(wrapper.state().endDate).toEqual(currentDate);
        });
    });

    describe("handleNameChange", () => {
        it("should store the startDate value to the state", () => {
            wrapper.instance().handleNameChange("abc");
            expect(wrapper.state().filteredName).toEqual("abc");
        });
    });
});
