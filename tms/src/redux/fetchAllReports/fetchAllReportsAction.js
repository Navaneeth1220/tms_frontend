
import { fetchAllHotels } from "../../../service/HotelService";
import store from "../../store";
import fetchAllHotelsConstants from "./fetchAllHotelsConstants";


function fetchAllReportsRequest() {
    return (
        {
            progress: true,
            report: [],
            error: '',
            type: fetchAllReportsConstants.fetchAllReportsRequest
        }
    );

}

function fetchAllReportsSuccess(reports) {

    return (
        {
            progress: false,
            reports: reports,
            error: '',
            type: fetchAllReportsConstants.fetchAllReportsSuccess
        });
}


function fetchAllReportsFail(error) {

    return (
        {
            progress: false,
            reports: [],
            error: error,
            type: fetchAllReportsConstants.fetchAllreportsFail
        });


}

function fetchAllReportsAction() {

    return () => {

        store.dispatch(fetchAllReportsRequest());
        const promise = fetchAllReports();
        
        promise.then((response) => {

            const hotels = response.data;
            store.dispatch(fetchAllReportsSuccess(hotels));

        }).catch(error => {

            store.dispatch(fetchAllReportsFail(error.message));
        })

    }

}

export { fetchAllReportsAction, fetchAllReportsFail, fetchAllReportsSuccess, fetchAllReportsRequest };