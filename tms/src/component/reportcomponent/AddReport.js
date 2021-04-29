
import React, { useState } from "react";
import DisplayReportDetails from "./DisplayReportDetails";
import commonStyle from "./commonStyle.module.css"
import validationMessage from '../reportcomponent/validationMesage'
import { useDispatch, useSelector } from "react-redux";
import { addReportAction } from "../../redux/addReport/addReportActions";

export default function AddReport() {


    const reportNameRef = React.createRef();

    const initialState = {

        reportName: undefined,

        validations: { reportName: undefined },
    };

    const [currentState, setNewState] = useState(initialState);

    const response = useSelector(state => {

        return (

            {

                report: state.addReport.report,
                error: state.addReport.error
            }
        );
    });

    const dispatch = useDispatch();


    const submitHandler = (event) => {

        event.preventDefault();
        if (currentState.validations.reportName) {

            return;
        }
        let data = { ...currentState };
        console.log("form data that has to be sent to service", data);
        dispatch(addReportAction(data));

    };

    const setFieldState = (ref) => {

        const fieldName = ref.current.name;
        const fieldValue = ref.current.value;
        console.log("inside set field state field name = " + fieldName + " fieldValue= " + fieldValue);
        let validationMsg;
        if (ref === reportNameRef) {

            validationMsg = validateReportName(fieldValue);
        }

        const newValidations = { ...currentState.validations, [fieldName]: validationMsg };
        const newState = {

            ...currentState,
            [fieldName]: fieldValue,
            report: undefined,
            errMsg: undefined,
            validations: newValidations
        };

        setNewState(newState);

    };

    const validateReportName = (reportName) => {

        if (reportName.length < 4) {

            return validationMessage.reportNameSmallThanLengthFour;
        }

        return undefined;
    }


    return (

        <div>
            <h1>Add Report </h1>

            <form onSubmit={submitHandler} className={commonStyle.content}>

                <div className="form-group">
                    <label>Enter Report Name </label>
                    <input
                        name="reportName"
                        type="text"
                        ref={reportNameRef}
                        onChange={() => setFieldState(reportNameRef)}
                        className="form-control"
                        required />

                    {currentState.validations.reportName ? (
                        <div className={commonStyle.error}>
                            {currentState.validations.reportName}
                        </div>
                    ) : (
                        ""
                    )}


                    <br />
                    <button className="btn-btn-primary">Add Report</button>

                </div>
            </form>

            {
                response.report ? (

                    <div>
                        <h3>Report Added Successfully</h3>
                        <DisplayReportDetails report={response.report} />
                    </div>

                ) : ""}

            {
                response.error ? (

                    <div className={commonStyle.error}>
                        Report Request Was Not Successful <br />
                        {response.error}
                    </div>

                ) : ""}


        </div>
    );
}
