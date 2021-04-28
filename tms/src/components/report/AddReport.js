import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import commonStyle from "./commonStyle.module.css";
import DisplayReportDetails from "./DisplayReportDetails";

export default function AddReport() {

    //const report = {reportname:"Trip", reporttype:"daily"};


    const reporttypeRef = React.createRef();
    const reportnameRef = React.createRef();


   // const response = { report: undefined, errMsg: undefined };
    const initialState = {
        reporttype: undefined,
        reportname: undefined,
        //formStatus: "",
    };

    const [currentState, setNewState] = useState(initialState);

    const response = useSelector(state =>{
        return(
            {
                report : state.addReport.report,
                error: state.addReport.error
            }
        );
    })
 
    const submitHandler = (event) => {

        event.preventDefault();
      setNewState({ ...currentState, formStatus: "form submitted successfully" });
        let formData = { ...currentState };
      


    };

    const setFieldState = (ref) => {

        const fieldName = ref.current.name;
        const fieldValue = ref.current.value;
        console.log("inside set field state field name = " + fieldName + " fieldValue= " + fieldValue);
        
        const newState = {

            ...currentState,
            [fieldName]: fieldValue,
            errMsg: undefined
        };

        setNewState(newState);


    };

    return (

        <div>
            <form onSubmit={(event) => submitHandler(event)} className={commonStyle.addReport}>
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

                    <br />
                    <button type="submit">Add Report</button>
                </div>
            </form>
            <h2> {currentState.formStatus}</h2>

            {
                currentState.report ? (

                    <div>
                        <h2>Report Added Successfully</h2>
                        <DisplayReportDetails report={currentState.report} />
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