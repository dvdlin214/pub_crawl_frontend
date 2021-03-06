import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamReducer';
import crawlReducer from './crawlReducer';
import locationReducer from './locationReducer';
import requestBarsReducer from './requestBarsReducer';
import searchReducer from './searchReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer,
  crawls: crawlReducer,
  locations: locationReducer,
  requestBars: requestBarsReducer,
  searchBar: searchReducer
});
