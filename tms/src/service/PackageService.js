
import axios from "axios";

const baseUrl = "http://localhost:8181";

function fetchPackageById(packageId) {

    const url = baseUrl + "/packages/byid/" + packageId;
    const promise = axios.get(url);
    return promise;

}

function addPackage(data) {

    const url = baseUrl + "/packages/add";
    let requestData = {

        packageName: data.packageName,
        packageDescription: data.packageDescription,
        packageType: data.packageType,
        packageCost: data.packageCost,
        hotelId: data.hotelId
    };

    console.log("inside addPackage service, request data", requestData);
    const promise = axios.post(url, requestData);
    return promise;

}

function fetchAllPackages() {

    const url = baseUrl + "/packages";
    const promise = axios.get(url);
    return promise;

}

export { fetchPackageById, addPackage, fetchAllPackages };
