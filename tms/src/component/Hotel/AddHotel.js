
import React, { useState } from "react";
import DisplayHotelDetails from "./DisplayHotelDetails";
import commonStyle from "./commonStyle.module.css"


export default function AddHotel() {

    /*  const hotel6 = {
          hotelId: 6,
          hotelName: "A2B3",
          hotelType: "Super3",
          hotelDescription: "Five Stars3",
          address: "chennai3",
          rent: 1003.0
      }*/

    const hotelNameRef = React.createRef();
    const hotelTypeRef = React.createRef();
    const hotelDescriptionRef = React.createRef();
    const addressRef = React.createRef();
    const rentRef = React.createRef();

    const response = { hotel: undefined, errMsg: undefined };

    const initialState = {
        hotelName: undefined,
        hotelType: undefined,
        hotelDescription: undefined,
        address: undefined,
        rent: undefined,
        formStatus: ""
    };

    const [currentState, setNewState] = useState(initialState);

    const submitHandler = (event) => {

        event.preventDefault();
        //setNewState({ ...currentState, formStatus: "form submitted successfully" });
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
                    <label>Enter Hotel Name </label>
                    <input
                        name="hotelName"
                        type="text"
                        ref={hotelNameRef}
                        onChange={() => setFieldState(hotelNameRef)} />

                </div>

                <div>
                    <label>Enter Hotel Type </label>
                    <select
                        name="hotelType"
                        type="text"
                        ref={hotelTypeRef}
                        onChange={() => setFieldState(hotelTypeRef)}>
                        <option disabled selected>Select Hotel Type</option>
                        <option value="three_star">Three_Star</option>
                        <option value="four_star">Four_Star</option>
                    </select>
                </div>

                <div>
                    <label>Enter HotelDescription</label>
                    <textarea id="hotelDescription" rows="4" cols="50"
                        name="hotelDescription"
                        type="text"
                        ref={hotelDescriptionRef}
                        onChange={() => setFieldState(hotelDescriptionRef)} />

                </div>

                <div>
                    <label>Enter Hotel Address</label>
                    <textarea id="address" rows="4" cols="50"
                        name="address"
                        type="text"
                        ref={addressRef}
                        onChange={() => setFieldState(addressRef)} />

                </div>

                <div>
                    <label>Enter Hotel Rent</label>
                    <input
                        name="rent"
                        type="number"
                        ref={rentRef}
                        onChange={() => setFieldState(rentRef)} />

                    <br />
                    <button type="submit">Add Hotel</button>
                </div>

            </form>
            <h2>{currentState.formStatus}</h2>

            {
                response.hotel ? (

                    <div>
                        <h2>Hotel Added Successfully</h2>
                        <DisplayHotelDetails hotel={response.hotel} />
                    </div>

                ) : ""}

            {
                response.errMsg ? (

                    <div className={commonStyle.error}>
                        Hotel Request Was Not Successful <br />
                        {response.errMsg}
                    </div>

                ) : ""}
        </div>
    );
}