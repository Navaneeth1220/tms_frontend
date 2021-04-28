
import fetchAllReportsConstants from "./fetchAllReportsConstants";

const initialState = {

    progress: false,
    reports: [],
    error: []
};

export default function fetchAllReportsReducer(state = initialState, action) {

    if (action.type === fetchAllReportsConstants.fetchAllReportsFail ||
        action.type === fetchAllReportsConstants.fetchAllReportsRequest ||
        action.type === fetchAllReportsConstants.fetchAllReportsSuccess

    ) {

        let newState = { ...state, ...action };
        return newState;
    }

    return state;
}