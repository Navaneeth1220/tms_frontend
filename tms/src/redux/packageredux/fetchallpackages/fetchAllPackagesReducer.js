
import fetchAllPackagesConstants from "./fetchAllPackagesConstants";

const initialState = {

    progress: false,
    packs: [],
    error: []
};

export default function fetchAllHotelsReducer(state = initialState, action) {

    if (action.type === fetchAllPackagesConstants.fetchAllPackagesFail ||
        action.type === fetchAllPackagesConstants.fetchAllPackagesRequest ||
        action.type === fetchAllPackagesConstants.fetchAllPackagesSuccess


    ) {

        let newState = { ...state, ...action };
        return newState;
    }

    return state;
}