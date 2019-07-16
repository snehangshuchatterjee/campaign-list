import React from 'react';

import * as actions from '../../actions/manageData';
import * as actionTypes from '../../actions/actionTypes'
import { manageDataReducer } from '.';

describe("Manage Data Reducer", () => {
    let initialState, data;
    beforeEach(() => {
        initialState = {
            data: [],
            filteredData: []
        };
        data = [
            {
                "id": 1, "name": "Divavu", "startDate": "9/19/2017", "endDate": "3/9/2018", "Budget": 88377
            },
            {
                "id": 2, "name": "Jaxspan", "startDate": "11/21/2017", "endDate": "2/21/2018", "Budget": 608715
            }
        ];
    });
    describe("Add Data", () => {
        it("should return the data even if state is not provided", () => {
            expect(manageDataReducer(undefined, actions.addData(data))).toEqual({ data, filteredData: data });
        });

        it("should return the state as it is if an invalid action is send", () => {
            expect(manageDataReducer(initialState, { type: "TEST_ACTION" })).toEqual(initialState);
        });
        it("should add the data to the state", () => {
            expect(manageDataReducer(initialState, actions.addData(data))).toEqual({ data, filteredData: data });
        });
    });

    describe("Filter Data", () => {
        it("should return the data even if state is not provided", () => {
            expect(manageDataReducer(undefined, actions.filterData(data))).toEqual({ data: [], filteredData: data });
        });

        it("should return the state as it is if an invalid action is send", () => {
            expect(manageDataReducer(initialState, { type: "TEST_ACTION" })).toEqual(initialState);
        });

        it("should return the data added to the state", () => {
            expect(manageDataReducer(initialState, actions.filterData(data))).toEqual({ data: [], filteredData: data });
        });
    });
});