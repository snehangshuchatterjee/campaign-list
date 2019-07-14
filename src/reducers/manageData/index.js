import { ADD_DATA, FILTER_DATA } from '../../actions/actionTypes';

const initialState = {
    data: [],
    filteredData: []
}

export const manageDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DATA:
            return Object.assign({}, state, {
                data: state.data.concat(action.payload),
                filteredData: state.data.concat(action.payload)
            });
        case FILTER_DATA:
            return Object.assign({}, state, {
                filteredData: action.payload
            });
        default:
            return state
    }
}