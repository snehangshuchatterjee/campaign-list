import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import sinon from "sinon";

import FilterComponent from './';
import FilterBodyComponent from './filterBody';

import * as actions from '../../actions/manageData'

const mockStore = configureMockStore();

describe("Filter Component", () => {
    let wrapper, store;
    const initialState = {
        manageData: {
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
        }
    };
    store = mockStore(initialState);

    beforeEach(() => {
        wrapper = shallow(<FilterComponent store={store} />);
    });

    describe("render", () => {
        it("should render the component properly", () => {
            let currentWrapper = wrapper.dive().dive();
            expect(currentWrapper.find(FilterBodyComponent).length).toEqual(1);
        });
    });

    describe("handleStartDateChange", () => {
        it("should store the startDate value to the state", () => {
            let currentDate = new Date();
            let currentWrapper = wrapper.dive().dive();
            currentWrapper.instance().handleStartDateChange(currentDate);
            expect(currentWrapper.state().startDate).toEqual(currentDate);
        });
    });

    describe("handleEndDateChange", () => {
        it("should store the startDate value to the state", () => {
            let currentDate = new Date();
            let currentWrapper = wrapper.dive().dive();
            currentWrapper.instance().handleEndDateChange(currentDate);
            expect(currentWrapper.state().endDate).toEqual(currentDate);
        });
    });

    describe("handleNameChange", () => {
        it("should store the startDate value to the state", () => {
            let currentWrapper = wrapper.dive().dive();
            currentWrapper.instance().handleNameChange("abc");
            expect(currentWrapper.state().filteredName).toEqual("abc");
        });
    });

    describe("handleButtonClick", () => {
        let currentWrapper;
        beforeEach(() => {
            actions.filterData = jest.fn();
            store.dispatch = sinon.spy();

            currentWrapper = shallow(<FilterComponent store={store} />).dive().dive();
        });

        it("should call the 'saveFilteredData' method with the input data if no filter criteria present", () => {
            currentWrapper.instance().handleButtonClick();
            expect(actions.filterData.mock.calls[0][0]).toEqual(initialState.manageData.filteredData);
        });

        it("should filter the data and return values after the start date if the startDate value is provided", () => {
            currentWrapper.setState({
                startDate: "10/10/2017",
                endDate: "",
                filteredName: ""
            });
            currentWrapper.instance().handleButtonClick();
            expect(actions.filterData.mock.calls[0][0]).toEqual([{
                "id": 2, "name": "Jaxspan", "startDate": "11/21/2017", "endDate": "2/21/2018", "Budget": 608715
            }]);
        });

        it("should filter the data and return values before the end date if the endDate value is provided", () => {
            currentWrapper.setState({
                endDate: "2/23/2018",
                startDate: "",
                filteredName: ""
            });
            currentWrapper.instance().handleButtonClick();
            expect(actions.filterData.mock.calls[0][0]).toEqual([{
                "id": 2, "name": "Jaxspan", "startDate": "11/21/2017", "endDate": "2/21/2018", "Budget": 608715
            }]);
        });

        it("should filter the data and return values containing the provided string if some string value is provided", () => {
            currentWrapper.setState({
                filteredName: "Div",
                endDate: "",
                startDate: ""
            });
            currentWrapper.instance().handleButtonClick();
            expect(actions.filterData.mock.calls[0][0]).toEqual([{
                "id": 1, "name": "Divavu", "startDate": "9/19/2017", "endDate": "3/9/2018", "Budget": 88377
            }]);
        });
    });
});
