
import getReportOnRequestConstants from "./getReportOnRequestConstants"

const intialState = {

    report: undefined,
    error: ''
}

function getReportOnRequestReducer(state = intialState, action) {

    if (action.type === getReportOnRequestConstants.fail ||
        action.type === getReportOnRequestConstants.success) {

        let newState = { ...state, ...action };
        return newState;
    }

    return state;
}

export default getReportOnRequestReducer;