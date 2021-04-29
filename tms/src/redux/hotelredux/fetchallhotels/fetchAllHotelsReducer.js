
import fetchAllHotelsConstants from "./fetchAllHotelsConstants";

const initialState = {

    progress: false,
    hotels: [],
    error: []
};

export default function fetchAllHotelsReducer(state = initialState, action) {

    if (action.type === fetchAllHotelsConstants.fetchAllHotelsFail ||
        action.type === fetchAllHotelsConstants.fetchAllHotelsRequest ||
        action.type === fetchAllHotelsConstants.fetchAllHotelsSuccess

    ) {

        let newState = { ...state, ...action };
        return newState;
    }

    return state;
}