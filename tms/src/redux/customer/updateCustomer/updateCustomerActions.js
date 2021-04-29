import { updateCustomer } from "../../../service/CustomerService";
import store from "../store";
import updateCustomerConstants from "./updateCustomerConstants";

function updateCustomerSuccess(customer) {

    return ({

        customer: customer,
        error: '',
        type: updateCustomerConstants.success
    });

}

function updateCustomerFail(error) {

    return (

        {
            customer: undefined,
            error: error,
            type: updateCustomerConstants.fail
        });
}

function updateCustomerAction(data) {

    return () => {

        const promise = updateCustomer(data);
        promise.then(

            response => {

                const customer = response.data;
                let actionObj = updateCustomerSuccess(customer);
                store.dispatch(actionObj);
            }

        ).catch(error => {

            let actionObj = updateCustomerFail(error.message);
            store.dispatch(actionObj);
        })

    }


}

export { updateCustomerAction, updateCustomerSuccess, updateCustomerFail };