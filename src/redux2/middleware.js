import * as actions from './actions'
export const middlewareFunctions = ({ dispatch, getState }) => next => action => {


    if (action.type === "GET_EPISODES_BY_SEASONS") {
        fetch(`https://www.breakingbadapi.com/api/episodes`, { method: 'GET' })
            .then(response => response.json())
            .then(result => {
                dispatch(actions.setEpisodes(result))
                console.log(result);

            })
            .catch(error => console.log('error', error));
        // dispatch(actions.setCompanyName(newCompany));
    }

    if (action.type === "GET_EPISODES_BY_ID") {
        fetch(`https://www.breakingbadapi.com/api/episodes/${action.payload}`, { method: 'GET' })
            .then(response => response.json())
            .then(result => {
                // dispatch(actions.setWorkers(result))
            })
            .catch(error => console.log('error', error));
        // dispatch(actions.setCompanyName(newCompany));
    }

    if (action.type === "GET_CHARACTER_BY_NAME") {
        fetch(`https://www.breakingbadapi.com/api/characters?name=${action.payload}`, { method: 'GET' })
            .then(response => response.json())
            .then(result => {
                // dispatch(actions.setWorkers(result))
            })
            .catch(error => console.log('error', error));
        // dispatch(actions.setCompanyName(newCompany));
    }
}