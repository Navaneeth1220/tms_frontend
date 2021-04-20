
import React, { useState } from "react";
import DisplayPackageDetails from "./DisplayPackageDetails";
import commonStyle from "./commonStyle.module.css"

export default function AddPackage() {

    const pack6 = {

        packageName: "Holiday6",
        packageDescription: "Cool6",
        packageType: "Legend6",
        packageCost: 12200.0,
        hotelId: 6,

    }

    const packageNameRef = React.createRef();
    const packageDescriptionRef = React.createRef();
    const packageTypeRef = React.createRef();
    const packageCostRef = React.createRef();
    const hotelIdRef = React.createRef();

    const response = { pack: pack6, errMsg: undefined };

    const initialState = {
        packageName: undefined,
        packageDescription: undefined,
        packageType: undefined,
        packageCost: undefined,
        hotelId: undefined,
        formStatus: "",
    };

    const [currentState, setNewState] = useState(initialState);

    const submitHandler = (event) => {

        event.preventDefault();
        //setNewState({ ...currentState, formStatus: "form submitted successfully" });
        let formData = { ...currentState };
        console.log("form data that has to be sent to service", formData)

    };

    const setFieldState = (ref) => {

        const fieldName = ref.current.name;
        const fieldValue = ref.current.value;
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
                    <label>Enter Package Name</label>
                    <select
                        name="packageName"
                        type="text"
                        ref={packageNameRef}
                        onChange={() => setFieldState(packageNameRef)}>
                        <option value="local">Local</option>
                        <option value="national">National</option>
                    </select>
                </div>

                <div>
                    <label>Enter Package Description </label>
                    <select
                        name="packageDescription"
                        type="text"
                        ref={packageDescriptionRef}
                        onChange={() => setFieldState(packageDescriptionRef)}>
                        <option value="diverse_cultural">Diverse_Cultural</option>
                        <option value="challenging_adventure">Challenging_Adventure</option>
                    </select>
                </div>

                <div>
                    <label>Enter Package Type</label>
                    <select
                        name="packageType"
                        type="text"
                        ref={packageTypeRef}
                        onChange={() => setFieldState(packageTypeRef)}>
                        <option value="normal">Normal</option>
                        <option value="ultra">Ultra</option>
                    </select>
                </div>

                <div>
                    <label>Enter Package Cost</label>
                    <select
                        name="packageCost"
                        type="number"
                        ref={packageCostRef}
                        onChange={() => setFieldState(packageCostRef)}>
                        <option value="8500.0">8500.0</option>
                        <option value="10500.0">10500.0</option>
                    </select>
                </div>

                <div>
                    <label>Enter Hotel Id</label>
                    <select
                        name="hotelId"
                        type="number"
                        ref={hotelIdRef}
                        onChange={() => setFieldState(hotelIdRef)}>
                        <option value="1">1</option>
                        <option value="3">3</option>
                    </select>
                    <br />

                    <button type="submit">Add Package</button>
                </div>
            </form>
            <h2>{currentState.formStatus}</h2>

            {
                response.pack ? (

                    <div>
                        <h2>Package Added Successfully</h2>
                        <DisplayPackageDetails pack={response.pack} />
                    </div>

                ) : ""}

            {
                response.errMsg ? (

                    <div className={commonStyle.error}>
                        Package Request Was Not Successful <br />
                        {response.errMsg}
                    </div>

                ) : ""}
        </div>
    );

}