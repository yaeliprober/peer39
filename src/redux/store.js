import { applyMiddleware, combineReducers, createStore } from 'redux';
import {getEpisodesBySeasons} from './actions'
import episodeReducer from './episodeReducer';
import { middlewareFunctions } from './middlewares';

const reducer = combineReducers({ episodeReducer });

const store = createStore(reducer , applyMiddleware(middlewareFunctions));
store.dispatch(getEpisodesBySeasons())
window.store = store;
export default store;