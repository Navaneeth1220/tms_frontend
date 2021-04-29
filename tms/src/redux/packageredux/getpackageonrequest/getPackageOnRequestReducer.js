
import getPackageOnRequestConstants from "./getPackageOnRequestConstants"

const intialState = {

    pack: undefined,
    error: ''
}

function getPackageOnRequestReducer(state = intialState, action) {

    if (action.type === getPackageOnRequestConstants.fail ||
        action.type === getPackageOnRequestConstants.success) {

        let newState = { ...state, ...action };
        return newState;
    }

    return state;
}

export default getPackageOnRequestReducer;