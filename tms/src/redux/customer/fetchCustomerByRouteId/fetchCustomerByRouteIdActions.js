import { fetchCustomerByRouteid } from "../../../service/CustomerService";
import store from "../../store";
import fetchCustomerByRouteIdConstants from "./fetchCustomerByRouteIdConstants";



function fetchCustomerByRouteIdSuccess(customer){

    return ({
       customer:customer,
       error:'',
       type:fetchCustomerByRouteIdConstants.fetchByRouteIdSuccess
    });

}


function fetchCustomerByRouteIdFail(error){

    return ({
       customer:undefined,
       error:error,
       type:fetchCustomerByRouteIdConstants.fetchByRouteIdFail
    });

}

function fetchCustomerByRouteId(routeId) {

    return () => {
        const promise = fetchCustomerByRouteid(routeId);
        promise.then((response) => {
            const customer = response.data;
            const actionObj = fetchCustomerByRouteIdSuccess(customer);
            store.dispatch(actionObj);
        }).catch(error => {
            const actionObj =fetchCustomerByRouteIdFail(error.message);
            store.dispatch(actionObj);
        })
    }

}

export {fetchCustomerByRouteId, fetchCustomerByRouteIdFail, fetchCustomerByRouteIdSuccess };
