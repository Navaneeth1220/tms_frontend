import axios from "axios";

const baseUrl = "http://localhost:8282";

function fetchBus(busId) {

    const url = baseUrl + "/buses/byid/" + busId;
    const promise = axios.get(url);
    return promise;

}

function addBus(data) {

    const url = baseUrl + "/buses/add";
    let requestData = {

        busType:data.busType,
        busNumber:data.busNumber,
        capacity:data.capacity
    };

    console.log("inside addBus service, request data", requestData);
    const promise = axios.post(url, requestData);
    return promise;

}

function allBuses() {

    const url = baseUrl + "/buses";
    const promise = axios.get(url);
    return promise;

}

export { fetchBus, addBus, allBuses };