import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import { MainComponent } from './';
import FilterComponent from '../filter';
import TableComponent from '../common/table';

const mockStore = configureMockStore();

describe("Main Component", () => {
    let wrapper, store;
    const initialState = {
        filteredData: [
            {
                "id": 1, "name": "Divavu", "startDate": "9/19/2017", "endDate": "3/9/2018", "Budget": 88377
            },
            {
                "id": 2, "name": "Jaxspan", "startDate": "11/21/2017", "endDate": "2/21/2018", "Budget": 608715
            }
        ]
    };

    beforeEach(() => {
        store = mockStore(initialState);

        wrapper = shallow(<MainComponent store={store} />);
    });

    describe("render", () => {
        it("should render properly without crashing", () => {
            expect(wrapper.find(FilterComponent).length).toEqual(1);
            expect(wrapper.find(TableComponent).length).toEqual(1);
        })
    });

    // describe("", () => {
    //     it("", () => {
    //         wrapper.setProps({ filteredData: initialState.filteredData });
    //         expect(wrapper.prop('filteredData').length).toBe(2);
    //     })
    // })
})