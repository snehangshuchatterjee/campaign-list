import React from 'react';
import store from '../store';

import './addData';

describe("Add Data", () => {
    it("should call dispatch", () => {
        let data = [{}, {}];
        store.dispatch = jest.fn();
        window.AddCampaigns(data);

        expect(store.dispatch).toBeCalledTimes(1);
    })
});