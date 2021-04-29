import addBusConstants from "./addBusConstants";

const intialState = {

    bus: undefined,
    error: ''

};

function addBusReducer(state = intialState, action) {

    if (action.type === addBusConstants.fail || action.type === addBusConstants.success) {

        let newState = { ...state, ...action };
        return newState;
    }

    return state;

}

export default addBusReducer;