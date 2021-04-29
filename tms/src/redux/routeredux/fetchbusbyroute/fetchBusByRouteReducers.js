import fetchBusByRouteConstants from './fetchBusByRouteConstants';
const intialState = {

    bus: undefined,
    error: ''
}

function fetchBusByRouteReducer(state = intialState, action) {

    if (action.type === fetchBusByRouteConstants.fail ||
        action.type === fetchBusByRouteConstants.success) {

        let newState = { ...state, ...action };
        return newState;
    }

    return state;
}

export default fetchBusByRouteReducer;