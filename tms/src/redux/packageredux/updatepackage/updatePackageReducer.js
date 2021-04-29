
import updatePackageConstants from "./updatePackageConstants";

const intialState = {

    pack: undefined,
    error: ''

};

function updatePackageReducer(state = intialState, action) {

    if (action.type === updatePackageConstants.fail ||
        action.type === updatePackageConstants.success) {

        let newState = { ...state, ...action };
        return newState;
    }

    return state;

}

export default updatePackageReducer;