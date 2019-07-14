import { combineReducers } from 'redux';
import { manageDataReducer } from './manageData'

export default combineReducers({
    manageData: manageDataReducer
});