import addBookingConstants from './addBookingConstants';

const initialState = {
    booking : undefined,
    error : ''
};

function addBookingReducer(state = initialState , action){

    if(action.type === addBookingConstants.fail || action.type=== addBookingConstants.success){
        let newState = {...state, ...action};
        return newState;
    }

    return state;
}

export default addBookingReducer;