
import React, { useState } from "react";
import DisplayPackageDetails from "./DisplayPackageDetails";
import commonStyle from "./commonStyle.module.css";
import validationMessage from './validationMessage';
import { useDispatch, useSelector } from "react-redux";
import { addPackageAction } from "../../redux/packageredux/addpackage/addPackageActions";

export default function AddPackage() {

    /* const pack6 = {
 
         packageName: "Holiday6",
         packageDescription: "Cool6",
         packageType: "Legend6",
         packageCost: 12200.0,
         hotelId: 6,
 
     }*/

    const packageNameRef = React.createRef();
    const packageDescriptionRef = React.createRef();
    const packageTypeRef = React.createRef();
    const packageCostRef = React.createRef();
    const hotelIdRef = React.createRef();

    const initialState = {
        packageName: undefined,
        packageDescription: undefined,
        packageType: undefined,
        packageCost: undefined,
        hotelId: undefined,
        validations: { packageName: undefined, packageDescription: undefined, packageType: undefined },
        //formStatus: "",
    };

    const [currentState, setNewState] = useState(initialState);

    const response = useSelector(state => {

        return (

            {

                pack: state.addPackage.pack,
                error: state.addPackage.error
            }
        );
    });

    const dispatch = useDispatch();

    const submitHandler = (event) => {

        event.preventDefault();
        //setNewState({ ...currentState, formStatus: "form submitted successfully" });
        if (currentState.validations.packageName || currentState.validations.packageType ||
            currentState.validations.packageDescription) {

            return;
        }
        let data = { ...currentState };
        console.log("form data that has to be sent to service", data);
        dispatch(addPackageAction(data));

    };

    const setFieldState = (ref) => {

        const fieldName = ref.current.name;
        const fieldValue = ref.current.value;
        console.log("inside set field state field name = " + fieldName + " fieldValue= " + fieldValue);
        let validationMsg;
        if (ref === packageNameRef) {

            validationMsg = validatePackageName(fieldValue);
        }

        if (ref === packageTypeRef) {

            validationMsg = validatePackageType(fieldValue);
        }

        if (ref === packageDescriptionRef) {

            validationMsg = validatePackageDescription(fieldValue);
        }

        const newValidations = { ...currentState.validations, [fieldName]: validationMsg };
        const newState = {

            ...currentState,
            [fieldName]: fieldValue,
            pack: undefined,
            errMsg: undefined,
            validations: newValidations
        };

        setNewState(newState);

    };

    const validatePackageName = (packageName) => {

        if (packageName.length < 4) {

            return validationMessage.packageNameSmallThanLengthFour;
        }

        return undefined;
    }

    const validatePackageType = (packageType) => {

        if (packageType.length > 10) {

            return validationMessage.packageTypeGreaterThanLengthTen;
        }

        return undefined;
    }

    const validatePackageDescription = (packageDescription) => {

        if (packageDescription.length < 10) {

            return validationMessage.packageDescriptionSmallThanLengthTen;
        }

        return undefined;
    }

    return (

        <div>
            <h1>Add Package </h1>
            <form onSubmit={submitHandler} className={commonStyle.content}>
                <div className="form-group">
                    <label>Enter Package Name</label>
                    <input
                        name="packageName"
                        type="text"
                        ref={packageNameRef}
                        onChange={() => setFieldState(packageNameRef)}
                        className="form-control"
                        required />
                    {currentState.validations.packageName ? (
                        <div className={commonStyle.error}>
                            {currentState.validations.packageName}
                        </div>
                    ) : (
                        ""
                    )}

                </div>

                <div className="form-group">
                    <label>Enter Package Description </label>
                    <textarea id="packageDescription" rows="4" cols="50"
                        name="packageDescription"
                        type="text"
                        ref={packageDescriptionRef}
                        onChange={() => setFieldState(packageDescriptionRef)}
                        className="form-control"
                        required />

                    {currentState.validations.packageDescription ? (
                        <div className={commonStyle.error}>
                            {currentState.validations.packageDescription}
                        </div>
                    ) : (
                        ""
                    )}

                </div>

                <div className="form-group">
                    <label>Enter Package Type</label>
                    <select
                        name="packageType"
                        type="text"
                        ref={packageTypeRef}
                        onChange={() => setFieldState(packageTypeRef)}
                        className="form-control"
                        required>
                        <option disabled selected>Select Package Type</option>
                        <option value="normal">Normal</option>
                        <option value="ultra">Ultra</option>
                    </select>
                    {currentState.validations.packageType ? (
                        <div className={commonStyle.error}>
                            {currentState.validations.packageType}
                        </div>
                    ) : (
                        ""
                    )}
                </div>

                <div className="form-group">
                    <label>Enter Package Cost</label>
                    <input
                        name="packageCost"
                        type="number"
                        ref={packageCostRef}
                        onChange={() => setFieldState(packageCostRef)}
                        className="form-control"
                        required />

                </div>

                <div className="form-group">
                    <label>Enter Hotel Id</label>
                    <input
                        name="hotelId"
                        type="number"
                        ref={hotelIdRef}
                        onChange={() => setFieldState(hotelIdRef)}
                        className="form-control"
                        required />

                    <br />

                    <button className="btn-btn-primary">Add Package</button>
                </div>
            </form>


            {
                response.pack ? (

                    <div>
                        <h3>Package Added Successfully</h3>
                        <DisplayPackageDetails pack={response.pack} />
                    </div>

                ) : ""}

            {
                response.error ? (

                    <div className={commonStyle.error}>
                        Package Request Was Not Successful <br />
                        {response.error}
                    </div>

                ) : ""}
        </div>
    );

}