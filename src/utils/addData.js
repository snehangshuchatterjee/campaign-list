import store from '../store';
import { addData } from '../actions/manageData';

window.AddCampaigns = (data) => {
    store.dispatch(addData(data));
}