import fetchBusConstants from './fetchBusConstants';

const initialState = {

    progress: false,
    bus: undefined,
    error: ''
}

function fetchBusReducer(state = initialState, action) {

    if (action.type === fetchBusConstants.fetchRequest ||
        action.type === fetchBusConstants.fetchSuccess ||
        action.type === fetchBusConstants.fetchFail
    ) {
        let newState = { ...state, ...action };
        return newState;
    }

    return state;

}

export default fetchBusReducer;