import axios from "axios";

const baseUrl = "http://localhost:8282";

function fetchRoute(routeId) {

    const url = baseUrl + "/routes/byid/" + routeId;
    const promise = axios.get(url);
    return promise;

}

function addRoute(data) {

    const url = baseUrl + "/routes/add";
    let requestData = {

        routeFrom: data.routeFrom,
        routeTo: data.routeTo,
        pickupPoint: data.pickupPoint,
        fare: data.fare
    };

    console.log("inside addRoute service, request data", requestData);
    const promise = axios.post(url, requestData);
    return promise;

}

function allRoutes() {

    const url = baseUrl + "/routes";
    const promise = axios.get(url);
    return promise;

}

function fetchBusByRoute(routeId){
    const url = baseUrl+"/routes/getBus/"+routeId;
    const promise = axios.get(url);
    return promise;
}

function updateRoute(data){
    const url = baseUrl+"/routes/update/route/"+data.routeId;
    let requestData = {

        routeFrom: data.routeFrom,
        routeTo: data.routeTo,
        pickupPoint: data.pickupPoint,
        fare: data.fare
    };

    console.log("inside updateRoute service, request data", requestData);
    const promise = axios.put(url, requestData);
    return promise;
}

export { fetchRoute, addRoute, allRoutes, fetchBusByRoute, updateRoute };