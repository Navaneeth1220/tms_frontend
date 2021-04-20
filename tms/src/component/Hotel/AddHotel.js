
import React, { useState } from "react";
import DisplayHotelDetails from "./DisplayHotelDetails";
import commonStyle from "./commonStyle.module.css"


export default function AddHotel() {

    const hotel6 = {
        hotelId: 6,
        hotelName: "A2B3",
        hotelType: "Super3",
        hotelDescription: "Five Stars3",
        address: "chennai3",
        rent: 1003.0
    }

    const hotelNameRef = React.createRef();
    const hotelTypeRef = React.createRef();
    const hotelDescriptionRef = React.createRef();
    const addressRef = React.createRef();
    const rentRef = React.createRef();

    const initialState = {
        hotelName: undefined,
        hotelType: undefined,
        hotelDescription: undefined,
        address: undefined,
        rent: undefined,
        hotel: hotel6,
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
            hotel:hotel6,
            errMsg: undefined,
        };

        setNewState(newState);

    };

    return (

        <div>
            <form onSubmit={(event) => submitHandler(event)}>
                <div>
                    <label>Enter Hotel Name</label>
                    <input
                        name="hotelName"
                        type="text"
                        ref={hotelNameRef}
                        onChange={() => setFieldState(hotelNameRef)}
                    />
                </div>
                <div>
                    <label>Enter Hotel Type </label>
                    <input
                        name="hotelType"
                        type="text"
                        ref={hotelTypeRef}
                        onChange={() => setFieldState(hotelTypeRef)}
                    />
                </div>
                <div>
                    <label>Enter HotelDescription</label>
                    <input
                        name="hotelDescription"
                        type="text"
                        ref={hotelDescriptionRef}
                        onChange={() => setFieldState(hotelDescriptionRef)}
                    />
                </div>
                <div>
                    <label>Enter Hotel Address</label>
                    <input
                        name="address"
                        type="text"
                        ref={addressRef}
                        onChange={() => setFieldState(addressRef)}
                    />
                </div>
                <div>
                    <label>Enter Hotel Rent</label>
                    <input
                        name="rent"
                        type="number"
                        ref={rentRef}
                        onChange={() => setFieldState(rentRef)}
                    />
                    <br />
                    <button type="submit">Add Hotel</button>
                </div>
            </form>
            <h2>{currentState.formStatus}</h2>

            {
                currentState.hotel ? (

                    <div>
                        <h2>Hotel Added Successfully</h2>
                        <DisplayHotelDetails hotel={currentState.hotel} />
                    </div>

                ) : ""}

            {
                currentState.errMsg ? (

                    <div className={commonStyle.error}>
                        Hotel Request Was Not Successful <br />
                        {currentState.errMsg}
                    </div>

                ) : ""}
        </div>
    );
}