import getBookingOnUserIdRequestConstants from "./getBookingOnUserIdRequestConstants"

const intialState = {

    booking: undefined,
    error: ''
}

function getBookingOnUserIdRequestReducer(state = intialState, action) {

    if (action.type === getBookingOnUserIdRequestConstants.fail ||
        action.type === getBookingOnUserIdRequestConstants.success) {

        let newState = { ...state, ...action };
        return newState;
    }

    return state;
}

export default getBookingOnUserIdRequestReducer;