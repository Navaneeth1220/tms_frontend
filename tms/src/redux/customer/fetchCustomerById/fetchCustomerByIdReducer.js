import fetchCustomerByIdConstants from "./fetchCustomerByIdConstants";

const initialState={
    customer:undefined,
    error:''
}

 function  fetchCustomerByIdReducer(state =initialState, action){

  if(action.type===fetchCustomerByIdConstants.fetchByIdSuccess ||
     action.type===fetchCustomerByIdConstants.fetchByIdFail
    ){
        let newState={...state, ...action};
        return newState;
    }

    return state ;

}

export default fetchCustomerByIdReducer;