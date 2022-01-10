import produce from 'immer';

const initialState = {
    episodeList: [],
    episode: null,
    character: null
};

export default produce((state, action) => {
    switch (action.type) {
        case 'SET_EPISODES_LIST':
            state.episodeList = action.payload
            break;
        case 'SET_EPISODE':
            state.episode = action.payload
            break;
        case 'SET_CHARACTER':
            state.character = action.payload
            break;
    }
}, initialState);