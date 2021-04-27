import getBusOnRequestConstants from "./getBusOnRequestConstants"

const intialState = {

    bus: undefined,
    error: ''
}

function getBusOnRequestReducer(state = intialState, action) {

    if (action.type === getBusOnRequestConstants.fail ||
        action.type === getBusOnRequestConstants.success) {

        let newState = { ...state, ...action };
        return newState;
    }

    return state;
}

export default getBusOnRequestReducer;