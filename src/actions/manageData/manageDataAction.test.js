import React from 'react';
import { shallow } from 'enzyme';

import * as actions from '.';
import * as actionTypes from '../actionTypes';

describe("Manage Data Actions", () => {
    describe("Add Data Action", () => {
        it("should return the Add Data action", () => {
            const data = "Test Data";
            const expectedAction = {
                type: actionTypes.ADD_DATA,
                payload: data
            };

            expect(actions.addData(data)).toEqual(expectedAction);
        });
    });

    describe("Filter Data Action", () => {
        it("should return the Add Data action", () => {
            const data = "Test Data";
            const expectedAction = {
                type: actionTypes.FILTER_DATA,
                payload: data
            };

            expect(actions.filterData(data)).toEqual(expectedAction);
        });
    });
});