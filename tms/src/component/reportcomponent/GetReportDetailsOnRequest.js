
import React, { useState } from 'react'
import DisplayReportDetails from './DisplayReportDetails';
import commonStyle from './commonStyle.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getReportOnRequestAction } from '../../redux/getReportOnRequest/getReportOnRequestActions';

export default function GetReportOnDetailsOnRequest() {

    const reportIdRef = React.createRef();

    const intitalState = { reportId: undefined };

    const [currentState, setNewState] = useState(intitalState);

    const response = useSelector(state => {

        return ({

            report: state.getReportOnRequest.report,
            error: state.getReportOnRequest.error
        });
    })

    const dispatch = useDispatch();



    const submitHandler = (event) => {

        event.preventDefault();
        console.log("current state", currentState);
        const reportId = reportIdRef.current.value;
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
