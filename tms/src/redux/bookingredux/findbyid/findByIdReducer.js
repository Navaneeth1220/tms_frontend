import findByIdConstants from "./findByIdConstants";

const initialState = {

    progress: false,
    booking: undefined,
    error: ''
}

function findByIdReducer(state = initialState, action) {

    if (action.type === findByIdConstants.findByIdRequest ||
        action.type === findByIdConstants.findByIdSuccess ||
        action.type === findByIdConstants.findByIdFail
    ) {
        let newState = { ...state, ...action };
        return newState;
    }

    return state;

}

export default findByIdReducer;