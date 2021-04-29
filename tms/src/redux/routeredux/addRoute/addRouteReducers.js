import addRouteConstants from "./addRouteConstants";

const intialState = {

    route: undefined,
    error: ''

};

function addRouteReducer(state = intialState, action) {

    if (action.type === addRouteConstants.fail || action.type === addRouteConstants.success) {

        let newState = { ...state, ...action };
        return newState;
    }

    return state;

}

export default addRouteReducer;