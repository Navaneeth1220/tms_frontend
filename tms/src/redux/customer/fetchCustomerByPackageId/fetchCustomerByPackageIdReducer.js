import fetchCustomerByPackageIdConstants from "./fetchCustomerByPackageIdConstants";

const initialState={
    customer:undefined,
    error:''
}

 function  fetchCustomerByPackageIdReducer(state =initialState, action){

  if(
     action.type===fetchCustomerByPackageIdConstants.fetchByPackageIdSuccess ||
     action.type===fetchCustomerByPackageIdConstants.fetchByPackageIdFail
    ){
        let newState={...state, ...action};
        return newState;
    }

    return state ;

}

export default fetchCustomerByPackageIdReducer;