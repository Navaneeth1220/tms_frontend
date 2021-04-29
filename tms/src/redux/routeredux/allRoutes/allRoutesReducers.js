import allRoutesConstants from './allRoutesConstants';
const initialState = {

    progress: false,
    routes: [],
    error: []
};

export default function allRoutesReducer(state = initialState, action) {

    if (action.type === allRoutesConstants.allRoutesFail ||
        action.type === allRoutesConstants.allRoutesRequest ||
        action.type === allRoutesConstants.allRoutesSuccess

    ) {

        let newState = { ...state, ...action };
        return newState;
    }

    return state;
}