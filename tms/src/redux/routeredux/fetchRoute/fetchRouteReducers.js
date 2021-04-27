import fetchRouteConstants from './fetchRouteConstants';

const initialState = {

    progress: false,
    route: undefined,
    error: ''
}

function fetchRouteReducer(state = initialState, action) {

    if (action.type === fetchRouteConstants.fetchRequest ||
        action.type === fetchRouteConstants.fetchSuccess ||
        action.type === fetchRouteConstants.fetchFail
    ) {
        let newState = { ...state, ...action };
        return newState;
    }

    return state;

}

export default fetchRouteReducer;