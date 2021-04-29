import getRouteOnRequestConstants from "./getRouteOnRequestConstants"

const intialState = {

    route: undefined,
    error: ''
}

function getRouteOnRequestReducer(state = intialState, action) {

    if (action.type === getRouteOnRequestConstants.fail ||
        action.type === getRouteOnRequestConstants.success) {

        let newState = { ...state, ...action };
        return newState;
    }

    return state;
}

export default getRouteOnRequestReducer;