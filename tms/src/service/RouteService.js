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

export { fetchRoute, addRoute, allRoutes };