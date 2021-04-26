import findByUserIdConstants from "./findByUserIdConstants";

const initialState = {

    progress: false,
    booking: undefined,
    error: ''
}

function findByUserIdReducer(state = initialState, action) {

    if (action.type === findByUserIdConstants.findByUserIdRequest ||
        action.type === findByUserIdConstants.findByUserIdSuccess ||
        action.type === findByUserIdConstants.findByUserIdFail
    ) {
        let newState = { ...state, ...action };
        return newState;
    }

    return state;

}

export default findByUserIdReducer;