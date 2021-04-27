import axios from "axios";

const baseUrl = "http://localhost:8080";

function fetchFeedbackById(feedbackId) {

    const url = baseUrl + "/feedbacks/byid/" + feedbackId;
    const promise = axios.get(url);
    return promise;

}

function addFeedback(data) {

    const url = baseUrl + "/feedbacks/add";
    let requestData = {

        feedback: data.feedback,
        customerId: data.customerId,
        rating: data.rating
    };

    console.log("inside addPackage service, request data", requestData);
    const promise = axios.post(url, requestData);
    return promise;

}

function fetchAllFeedbacks() {

    const url = baseUrl + "/feedbacks";
    const promise = axios.get(url);
    return promise;

}

function fetchByCustomerId(customerId){

const url=baseUrl + "/feedbacks/customer/"+customerId;
const promise= axios.get(url);
return promise;
}
export { fetchFeedbackById, addFeedback, fetchAllFeedbacks,fetchByCustomerId };