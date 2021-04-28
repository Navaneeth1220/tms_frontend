
import React, { useState } from 'react'

import commonStyle from './commonStyle.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getReportOnRequestAction } from '../../redux/reportredux/getreportonrequest/getreportOnRequestActions';
import DisplayReportDetails from './DisplayReportDetails';

export default function GetReportDetailsOnRequest() {

    const ReportIdRef = React.createRef();

    const intitalState = { ReportId: undefined };

    const [currentState, setNewState] = useState(intitalState);

    const response = useSelector(state => {

        return ({

            report: state.getRequestOnRequest.report,
            error: state.getRequestOnRequest.error
        });
    })

    const dispatch = useDispatch();



    const submitHandler = (event) => {

        event.preventDefault();
        console.log("current state", currentState);
        const RequestId = reportIdRef.current.value;
        dispatch(getReportOnRequestAction(reportId));

    }

    const setFieldState = () => {

        const reportIdValue = reportIdRef.current.value;
        const newState = { ...currentState, reportId: reportIdValue, report: undefined, errMsg: undefined };
        setNewState(newState);
    }

    return (
        <div>
            <h1> Get Report Details On Request</h1>

            <div className={commonStyle.content}>
                <form onSubmit={submitHandler} className={commonStyle.content}>

                    <div className="form-group">
                        <label>Enter ReportId</label>

                        <input
                            name="reportId"
                            type="number"
                            ref={reportIdRef}
                            onChange={setFieldState}
                            className="form-control" />

                    </div>

                    <button className="btn btn-primary">Get Report</button>

                </form>

                {response.report ? (
                    <div>
                        <DisplayReportDetails report={response.report} />
                    </div>
                ) : ''}


                {
                    response.error ? (

                        <div className={commonStyle.error}>
                            Get Report On Request Processing Unsuccessful
                            <br />
                            {response.error}

                        </div>
                    ) : ''

                }
            </div>
        </div>

    );

}