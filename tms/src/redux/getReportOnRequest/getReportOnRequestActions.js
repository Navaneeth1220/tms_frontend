
import { fetchReportById } from "../../service/ReportService";
import store from "../bookingredux/store";
import getReportOnRequestConstants from "./getReportOnRequestConstants";

function getReportOnRequestSuccess(report) {

    return ({

        type: getReportOnRequestConstants.success,
        report: report,
        error: ''
    });

}


function getReportOnRequestFail(error) {

    return ({

        type: getReportOnRequestConstants.fail,
        report: undefined,
        error: error
    });

}

function getReportOnRequestAction(reportId) {

    return () => {

        const promise = fetchReportById(reportId);
        promise.then((response) => {

            const report = response.data;
            const actionObj = getReportOnRequestSuccess(report);
            store.dispatch(actionObj);

        }).catch(error => {

            const actionObj = getReportOnRequestFail(error.message);
            store.dispatch(actionObj);
        })
    }

}


export { getReportOnRequestAction, getReportOnRequestFail, getReportOnRequestSuccess };