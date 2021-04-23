
import fetchAllHotelsContants from "./fetchAllHotelsConstants";

const initialState = {

    progress: false,
    hotels: [],
    error: []
};

export default function fetchAllHotelsReducer(state = initialState, action) {

    if (action.type === fetchAllHotelsContants.fetchAllHotelsFail ||
        action.type === fetchAllHotelsContants.fetchAllHotelsRequest ||
        action.type === fetchAllHotelsContants.fetchAllHotelsSuccess

    ) {

        let newState = { ...state, ...action };
        return newState;
    }

    return state;
}