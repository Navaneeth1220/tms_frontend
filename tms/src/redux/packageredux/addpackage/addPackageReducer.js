
import addPackageConstants from "./addPackageConstants";

const intialState = {

    pack: undefined,
    error: ''

};

function addPackageReducer(state = intialState, action) {

    if (action.type === addPackageConstants.fail || action.type === addPackageConstants.success) {

        let newState = { ...state, ...action };
        return newState;
    }

    return state;

}

export default addPackageReducer;