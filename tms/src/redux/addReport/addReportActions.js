
import { addReport } from "../../service/ReportService";
import store from "../store";
import addReportConstants from "./addReportConstants";

function addReportSuccess(report) {

    return ({

        report: report,
        error: '',
        type: addReportConstants.success
    });

}

function addReportFail(error) {

    return (

        {
            report: undefined,
            error: error,
            type: addReportConstants.fail
        });
}

function addReportAction(data) {

    return () => {

        const promise = addReport(data);

        promise.then(

            response => {

                const report = response.data;
                let actionObj = addReportSuccess(report);
                store.dispatch(actionObj);
            }

        ).catch(error => {

            let actionObj = addReportFail(error.message);
            store.dispatch(actionObj);
        })

    }


}

export { addReportAction, addReportSuccess, addReportFail };