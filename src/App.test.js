import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

import configureMockStore from 'redux-mock-store';

import MainComponent from './components/mainComponent';

const mockStore = configureMockStore();

describe("App", () => {
    let wrapper, store;
    beforeEach(() => {
        const initialState = {}
        store = mockStore(initialState);

        wrapper = shallow(<App store={store} />);
    });
    it('renders without crashing', () => {
        expect(wrapper.find(MainComponent).length).toEqual(1)
    });
});
