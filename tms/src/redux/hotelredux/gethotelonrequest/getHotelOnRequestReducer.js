
import getHotelOnRequestConstants from "./getHotelOnRequestConstants"

const intialState = {

    hotel: undefined,
    error: ''
}

function getHotelOnRequestReducer(state = intialState, action) {

    if (action.type === getHotelOnRequestConstants.fail ||
        action.type === getHotelOnRequestConstants.success) {

        let newState = { ...state, ...action };
        return newState;
    }

    return state;
}

export default getHotelOnRequestReducer;