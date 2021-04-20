
import React, { useState } from "react";
import DisplayPackageDetails from "./DisplayPackageDetails";
import commonStyle from "./commonStyle.module.css"

export default function AddPackage() {

     /*const pack6 = {
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
        pack: undefined,
        errMsg: undefined,
        formStatus: "",
    };

    const [currentState, setNewState] = useState(initialState);

    const submitHandler = (event) => {

        event.preventDefault();
        setNewState({ ...currentState, formStatus: "form submitted successfully" });

    };

    const setFieldState = (ref) => {

        const fieldName = ref.current.name;
        const fieldValue = ref.current.value;
        const newState = {

            ...currentState,
            [fieldName]: fieldValue,
            pack: undefined,
            errMsg: undefined,
        };

        setNewState(newState);

    };

    return (

        <div>
            <form onSubmit={(event) => submitHandler(event)}>
                <div>
                    <label>Enter Package Name</label>
                    <input
                        name="packageName"
                        type="text"
                        ref={packageNameRef}
                        onChange={() => setFieldState(packageNameRef)}
                    />
                </div>
                <div>
                    <label>Enter Package Description </label>
                    <input
                        name="packageDescription"
                        type="text"
                        ref={packageDescriptionRef}
                        onChange={() => setFieldState(packageDescriptionRef)}
                    />
                </div>
                <div>
                    <label>Enter Package Type</label>
                    <input
                        name="packageType"
                        type="text"
                        ref={packageTypeRef}
                        onChange={() => setFieldState(packageTypeRef)}
                    />
                </div>
                <div>
                    <label>Enter Hotel Cost</label>
                    <input
                        name="packageCost"
                        type="number"
                        ref={packageCostRef}
                        onChange={() => setFieldState(packageCostRef)}
                    />
                </div>
                <div>
                    <label>Enter Hotel Id</label>
                    <input
                        name="hotelId"
                        type="number"
                        ref={hotelIdRef}
                        onChange={() => setFieldState(hotelIdRef)}
                    />
                    <br />
                    <button type="submit">Add Package</button>
                </div>
            </form>
            <h2>{currentState.formStatus}</h2>

            {
                currentState.pack ? (

                    <div>
                        <h2>Package Added Successfully</h2>
                        <DisplayPackageDetails pack={currentState.pack} />
                    </div>

                ) : ""}

            {
                currentState.errMsg ? (

                    <div className={commonStyle.error}>
                        Package Request Was Not Successful <br />
                        {currentState.errMsg}
                    </div>

                ) : ""}
        </div>
    );

}