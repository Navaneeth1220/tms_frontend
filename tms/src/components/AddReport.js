import React, { useState } from "react";

import commonStyle from "./commonStyle.module.css"
import DisplayReportDetails from "./DisplayReportDetails";

export default function AddReport() {


    const reporttypeRef = React.createRef();
    const reportnameRef = React.createRef();
    
   
    const response={  report:undefined,errMsg: undefined};
    const initialState = {
        reporttype: undefined,
        reportname: undefined,
        formStatus: "",
    };

    const [currentState, setNewState] = useState(initialState);

    const submitHandler = (event) => {

        event.preventDefault();
       // setNewState({ ...currentState, formStatus: "form submitted successfully" });
        let formData = { ...currentState };
        console.log("form data that has to be sent to service", formData);

    };

    const setFieldState = (ref) => {

        const fieldName = ref.current.name;
        const fieldValue = ref.current.value;
        console.log("inside set field state field name = " + fieldName + " fieldValue= " + fieldValue);
        const newState = {

            ...currentState,
            [fieldName]: fieldValue,
            errMsg: undefined,
        };

        setNewState(newState);


    };

    return (

        <div>
            <form onSubmit={(event) => submitHandler(event)}>
                <div>
                    <label>Enter Report Name :</label>
                    <input
                        name="reportname"
                        type="text"
                        ref={reportnameRef}
                        onChange={() => setFieldState(reportnameRef)}>

                        </input>
                    
                </div>
                <div>
                    <label>Enter Report Type</label>
                    <select
                        name="reporttype"
                        type="text"
                        ref={reporttypeRef}
                        onChange={() => setFieldState(reporttypeRef)}>
                            <option disabled selected>Select Report Name</option>
                        <option value="buisness">Buisness</option>
                        <option value="operational">Operational</option>
                        <option value="Accounts">Accounts</option>
                        </select>
                    
                    <br />
                    <button type="submit">Add Report</button>
                </div>
            </form>
            <h2>{currentState.formStatus}</h2>

            {
                response.report ? (

                    <div>
                        <h2>Report Added Successfully</h2>
                        <DisplayReportDetails report={response.report} />
                    </div>

                ) : ""}

            {
                response.errMsg ? (

                    <div className={commonStyle.error}>
                        Report Request Was Not Successful <br />
                        {response.errMsg}
                    </div>

                ) : ""}
        </div>
    );

}