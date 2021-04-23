
import React, { useState } from "react"
import DisplayPackageDetails from "./DisplayPackageDetails"
import commonStyle from "./commonStyle.module.css"

export default function GetPackageDetails() {

   /*let mockPackage = {

        packageId: 1,
        packageName: "holiday1",
        packageDescription: "Cool1",
        packageType: "Legend",
        packageCost: 5000.0,
        hotelId: 5,
        hotelName: "A2B",
        hotelType: "Super",
        hotelDescription: "Five Stars",
        address: "chennai",
        rent: 1000.0,
        hotelStatus: "Available"
    };*/

    const packageIdRef = React.createRef();

    const initialState = { packageId: undefined, pack: undefined, errMsg: undefined };

    const [currentState, setNewState] = useState(initialState);

    const submitHandler = (event) => {

        event.preventDefault();

    }

    const setFieldState = () => {

        const packageIdValue = packageIdRef.current.value;
        const newState = { ...currentState, packageId: packageIdValue };
        setNewState(newState);

    }



    return (

        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Enter Package Id: </label>
                    <input
                        name="packageId"
                        type="number"
                        ref={packageIdRef}
                        onChange={setFieldState}

                    />
                    <button>Get Package</button>

                </div>
            </form>

            {
                currentState.pack ? (
                    <div>
                        <DisplayPackageDetails pack={currentState.pack} />
                    </div>

                ) : ""}

            {
                currentState.errMsg ? (
                    <div className={commonStyle.error}>
                        Package Request Processing Unsuccessful
                        <br />
                        {currentState.errMsg}
                    </div>
                ) : ""}
        </div>
    );
}