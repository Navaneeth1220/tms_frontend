
import fetchPackageByIdConstants from "./fetchPackageByIdConstants";

const initialState = {

    progress: false,
    pack: undefined,
    error: ''
}

function fetchPackageByIdReducer(state = initialState, action) {

    if (action.type === fetchPackageByIdConstants.fetchByIdRequest ||
        action.type === fetchPackageByIdConstants.fetchByIdSuccess ||
        action.type === fetchPackageByIdConstants.fetchByIdFail
    ) {
        let newState = { ...state, ...action };
        return newState;
    }

    return state;

}

export default fetchPackageByIdReducer;