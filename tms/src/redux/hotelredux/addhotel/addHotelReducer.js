
import addHotelConstants from "./addHotelConstants";

const intialState = {

    hotel: undefined,
    error: ''

};

function addHotelReducer(state = intialState, action) {

    if (action.type === addHotelConstants.fail || action.type === addHotelConstants.success) {

        let newState = { ...state, ...action };
        return newState;
    }

    return state;

}

export default addHotelReducer;