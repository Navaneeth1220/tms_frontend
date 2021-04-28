
import React, { useEffect } from "react";
import commonStyle from "./commonStyle.module.css";
import { useDispatch, useSelector } from 'react-redux';



export default function GetHotelDetailsById({ hotelId }) {

    /*    let mockReport = {
            reportId: 5,
            reportName: "delhi",
            reportType: "daily",
        };*/

    const currentState = useSelector(state => {

        return ({

            report: state.fetchReportById.report,
            error: state.fetchReportById.error
        });
    })

    const dispatch = useDispatch();


    const fetchReportOnRender = () => {

        dispatch(fetchReportction(hotelId));

    }

    useEffect(fetchReportOnRender, []);



    return (

        <div>
            <h1> Get Report Details</h1>



            {currentState.report ? (
                <div>
                    <DisplayReportDetails report={currentState.report} />
                </div>
            ) : ''}


            {
                currentState.error ? (

                    <div className={commonStyle.error}>
                        Get Report Details Request processing unsuccessful
                        <br />
                        {currentState.error}

                    </div>
                ) : ''

            }
        </div>

    );
}
