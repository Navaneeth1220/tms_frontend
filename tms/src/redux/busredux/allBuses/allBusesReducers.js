import allBusesConstants from './allBusesConstants';
const initialState = {

    progress: false,
    buses: [],
    error: []
};

export default function allBusesReducer(state = initialState, action) {

    if (action.type === allBusesConstants.allBusesFail ||
        action.type === allBusesConstants.allBusesRequest ||
        action.type === allBusesConstants.allBusesSuccess

    ) {

        let newState = { ...state, ...action };
        return newState;
    }

    return state;
}