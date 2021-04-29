
import fetchHotelByIdConstants from "./fetchHotelByIdConstants";

const initialState = {

    progress: false,
    hotel: undefined,
    error: ''
}

function fetchHotelByIdReducer(state = initialState, action) {

    if (action.type === fetchHotelByIdConstants.fetchByIdRequest ||
        action.type === fetchHotelByIdConstants.fetchByIdSuccess ||
        action.type === fetchHotelByIdConstants.fetchByIdFail
    ) {
        let newState = { ...state, ...action };
        return newState;
    }

    return state;

}

export default fetchHotelByIdReducer;