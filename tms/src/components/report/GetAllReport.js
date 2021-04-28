
import { useEffect } from "react";
import commonStyle from './commonStyle.module.css';

import { useDispatch, useSelector } from "react-redux";

import DisplayReportList from "./DisplayReportList";

export default function GetAllReport() {


    const currentState = useSelector(state => {

        return {

            reports: state.fetchAllReports.reports,
            error: state.fetchAllReports.error,

        };
    })

    const dispatch = useDispatch();

    const fetchAll = () => {

        console.log("inside use state function")
        dispatch(fetchAllReportsAction());
    };

    useEffect(fetchAll, []);

    console.log("inside getall Reports", currentState.reports);

    return (
        <div>

            <h1>Get All Reports</h1>

            <div className={commonStyle.content}>
                <ul >

                    {currentState.reports ? (

                        <DisplayReportList reports={currentState.reports} />

                    ) : ''}



                </ul>

            </div>
            { currentState.error ? (

                <div className={commonStyle.error}>
                    Get All Reports Error in request processing
                    <br />
                    {currentState.error}
                </div>
            ) : ''}


        </div>

    )

}
