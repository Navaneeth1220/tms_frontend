import fetchCustomerByRouteIdConstants from "./fetchCustomerByRouteIdConstants";

const initialState={
    customer:undefined,
    error:''
}

 function  fetchCustomerByRouteIdReducer(state =initialState, action){

  if(action.type===fetchCustomerByRouteIdConstants.fetchByIdSuccess ||
     action.type===fetchCustomerByRouteIdConstants.fetchByIdFail
    ){
        let newState={...state, ...action};
        return newState;
    }

    return state ;

}

export default fetchCustomerByRouteIdReducer;