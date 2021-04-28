import axios from "axios";

const baseUrl = "http://localhost:8080";

function fetchCustomerbyid(customerId) {

    const url = baseUrl + "/customers/byid/" + customerId;
    const promise = axios.get(url);
    return promise;

}
function fetchCustomerByRouteid(routeId) {

    const url = baseUrl + "/customers/route/" + routeId;
    const promise = axios.get(url);
    return promise;

}
function fetchCustomerByPackageId(packageId) {

    const url = baseUrl + "/customers/package/" + packageId;
    const promise = axios.get(url);
    return promise;

}
function updateCustomer(data) {

    const url = baseUrl + "/customers/update/" + data.customerId;
    let requestData = {

        customerName: data.customerName,
        customerPassword: data.customerPassword,
        address: data.address,
        mobileNo: data.mobileNo,
        email: data.email
    };
    console.log("inside updateCustomer service, request data", requestData);
    const promise = axios.put(url, requestData);
    return promise;

}

function addCustomer(data) {

    const url = baseUrl + "/customers/add";
    let requestData = {

        customerName: data.customerName,
        customerPassword: data.customerPassword,
        address: data.address,
        mobileNo: data.mobileNo,
        email: data.email
    };

    console.log("inside addCustomer  service, request data", requestData);
    const promise = axios.post(url, requestData);
    return promise;

}



export { fetchCustomerbyid, addCustomer ,fetchCustomerByPackageId ,fetchCustomerByRouteid ,updateCustomer  };