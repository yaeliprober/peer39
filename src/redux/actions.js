export function getEpisodesBySeasons(list) {
    return { type: 'GET_EPISODES_BY_SEASONS', payload: list };
}
export function setEpisodesList(list) {
    return { type: 'SET_EPISODES_LIST', payload: list };
}
export function getEpisodeById(id) {
    return { type: 'GET_EPISODES_BY_ID', payload: id };
}
export function getCharacterByName(name) {
    return { type: 'GET_CHARACTER_BY_NAME', payload: name };
}
export function setEpisode(name) {
    return { type: 'SET_EPISODE', payload: name };
}
export function setCharacter(name) {
    return { type: 'SET_CHARACTER', payload: name };
}