
import addReportConstants from "./addReportConstants";

const intialState = {

    report: undefined,
    error: ''

};

function addReportReducer(state = intialState, action) {

    if (action.type === addReportConstants.fail || action.type === addReportConstants.success) {

        let newState = { ...state, ...action };
        return newState;
    }

    return state;

}

export default addReportReducer;
