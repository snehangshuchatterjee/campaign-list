import { ADD_DATA, FILTER_DATA } from '../actionTypes'

export const addData = (data) => {
    return({
        type: ADD_DATA,
        payload: data
    });
}

export const filterData = (data) => {
    return ({
        type: FILTER_DATA,
        payload: data
    });
}