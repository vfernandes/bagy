import { combineReducers } from 'redux';
import requests from './requests'
import store from './store'

export default combineReducers({
    requests,
    store
});