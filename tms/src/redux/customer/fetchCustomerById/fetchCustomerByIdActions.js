import { fetchCustomerbyid }from "../../../service/CustomerService"
import store from "../../bookingredux/store";
import fetchCustomerByIdConstants from "./fetchCustomerByIdConstants";



function fetchCustomerByIdSuccess(customer){

    return ({
       customer:customer,
       error:'',
       type:fetchCustomerByIdConstants.fetchByIdSuccess
    });

}


function fetchCustomerByIdFail(error){

    return ({
       customer:undefined,
       error:error,
       type:fetchCustomerByIdConstants.fetchByIdFail
    });

}

function fetchCustomerById(customerId) {

    return () => {
        const promise = fetchCustomerbyid(customerId);
        promise.then((response) => {
            const customer = response.data;
            const actionObj = fetchCustomerByIdSuccess(customer);
            store.dispatch(actionObj);
        }).catch(error => {
            const actionObj =fetchCustomerByIdFail(error.message);
            store.dispatch(actionObj);
        })
    }

}

export {fetchCustomerById, fetchCustomerByIdFail, fetchCustomerByIdSuccess };
