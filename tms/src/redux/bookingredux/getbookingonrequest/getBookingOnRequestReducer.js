import getBookingOnRequestConstants from "./getBookingOnRequestConstants"

const intialState = {

    booking: undefined,
    error: ''
}

function getBookingOnRequestReducer(state = intialState, action) {

    if (action.type === getBookingOnRequestConstants.fail ||
        action.type === getBookingOnRequestConstants.success) {

        let newState = { ...state, ...action };
        return newState;
    }

    return state;
}

export default getBookingOnRequestReducer;