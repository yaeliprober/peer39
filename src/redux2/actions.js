export function getEpisodesBySeasons(objUser) {
    return { type: 'GET_EPISODES_BY_SEASONS', payload: objUser };
}
export function SET_EPISODES(list) {
    return { type: 'SET_EPISODES', payload: list };
}
