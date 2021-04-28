
import axios from "axios";

const baseUrl = "http://localhost:8080";

function fetchReportById(reportId) {

    const url = baseUrl + "/reports/byid/" + reportId;
    const promise = axios.get(url);
    return promise;

}

function addReport(data) {

    const url = baseUrl + "/reports/add";
    let requestData = {

        reportName: data.reportName,
    };

    console.log("inside addReport service, request data", requestData);
    const promise = axios.post(url, requestData);
    return promise;

}

function fetchAllReports() {

    const url = baseUrl + "/reports";
    const promise = axios.get(url);
    return promise;

}

export { fetchReportById, addReport, fetchAllReports };