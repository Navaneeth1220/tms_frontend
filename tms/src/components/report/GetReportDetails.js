import React, { useState } from "react"
import commonStyle from "./commonStyle.module.css"
import DisplayReportDetails from "./DisplayReportDetails";





export default function GetReportDetails() {

    const reportIdRef = React.createRef();

    const initialState = { reportId: undefined, report: undefined, errMsg: undefined };

    const [currentState, setNewState] = useState(initialState);

    const submitHandler = (event) => {

        event.preventDefault();

    }

    const setFieldState = () => {

        const reportIdValue = reportIdRef.current.value;
        const newState = { ...currentState, reportId: reportIdValue };
        setNewState(newState);

    }



    return (

        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Enter Report Id: </label>
                    <input
                        name="reportId"
                        type="number"
                        ref={reportIdRef}
                        onChange={setFieldState}

                    />
                    <button>Get Report</button>

                </div>
            </form>

            {
                currentState.report ? (
                    <div>
                        <DisplayReportDetails report={currentState.report} />
                    </div>

                ) : ""}

            {
                currentState.errMsg ? (
                    <div className={commonStyle.error}>
                        Report Request Processing Unsuccessful
                        <br />
                        {currentState.errMsg}
                    </div>
                ) : ""}
        </div>
    );
}