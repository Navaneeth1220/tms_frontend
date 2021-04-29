import updateRouteConstants from './updateRouteConstants';

const initialState={
    route:undefined,
    error:''
};

function updateRouteReducer(state=initialState, action){

    if(action.type === updateRouteConstants.success ||  action.type === updateRouteConstants.fail){

        let newState = {...state,...action};
        return newState;
    }
    return state;
}

export default updateRouteReducer;