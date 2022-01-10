import { createStore, applyMiddleware } from 'redux'
import { produce } from 'immer';
import { SET_EPISODES } from './actions'

// const inisialState = {
//     episodeList: null,
//     episode: null,
//     character: null
// }
// const reducerEpisode = produce((state, action) => {
//     switch (action.type) {
//         case 'SET_EPISODES':
//             state.episodeList = action.payload
//             break;
//         default:
//             break;
//     }
// }, inisialState);
// export default reducerEpisode;

import { middlewareFunctions } from './middleware'
const inisialState = {
    episodeList: null,
    episode: null,
    character: null
}
// const reducer = combineReducers({ });
const reducer = produce((state, action) => {
    switch (action.type) {
        case SET_EPISODES:
            state.episodeList = action.payload
            break;
        default:
            break;
    }
}, inisialState);
const store = createStore(reducer, applyMiddleware(middlewareFunctions));
window.store = store;
export default store;
