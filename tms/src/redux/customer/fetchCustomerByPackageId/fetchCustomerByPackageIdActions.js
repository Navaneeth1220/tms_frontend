import { fetchCustomerByPackageid } from "../../../service/CustomerService";
import store from "../../store";
import fetchCustomerByPackageIdConstants from "./fetchCustomerByPackageIdConstants";


function fetchCustomerByPackageIdSuccess(customer){

    return ({
       customer:customer,
       error:'',
       type:fetchCustomerByPackageIdConstants.fetchByPackageIdSuccess
    });

}


function fetchCustomerByPackageIdFail(error){

    return ({
       customer:undefined,
       error:error,
       type:fetchCustomerByPackageIdConstants.fetchByPackageIdFail
    });

}

function fetchCustomerByPackageId(packageId) {

    return () => {
        const promise = fetchCustomerByPackageid(packageId);
        promise.then((response) => {
            const customer = response.data;
            const actionObj = fetchCustomerByPackageIdSuccess(customer);
            store.dispatch(actionObj);
        }).catch(error => {
            const actionObj =fetchCustomerByPackageIdFail(error.message);
            store.dispatch(actionObj);
        })
    }

}
export {fetchCustomerByPackageId, fetchCustomerByPackageIdFail, fetchCustomerByPackageIdSuccess };
