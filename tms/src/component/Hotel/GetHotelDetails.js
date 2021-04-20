
import React, { useState } from "react"
import DisplayHotelDetails from "./DisplayHotelDetails"
import commonStyle from "./commonStyle.module.css"





export default function GetHotelDetails() {

    let mockHotel = {
        hotelId: 5,
        hotelName: "A2B",
        hotelType: "Super",
        hotelDescription: "Five Stars",
        address: "chennai",
        rent: 1000.0
    };

    const hotelIdRef = React.createRef();

    const initialState = { hotelId: undefined, hotel: mockHotel, errMsg: undefined };

    const [currentState, setNewState] = useState(initialState);

    const submitHandler = (event) => {

        event.preventDefault();

    }

    const setFieldState = () => {

        const hotelIdValue = hotelIdRef.current.value;
        const newState = { ...currentState, hotelId: hotelIdValue };
        setNewState(newState);

    }



    return (

        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Enter Hotel Id: </label>
                    <input
                        name="hotelId"
                        type="number"
                        ref={hotelIdRef}
                        onChange={setFieldState}

                    />
                    <button>Get Hotel</button>

                </div>
            </form>

            {
                currentState.hotel ? (
                    <div>
                        <DisplayHotelDetails hotel={currentState.hotel} />
                    </div>

                ) : ""}

            {
                currentState.errMsg ? (
                    <div className={commonStyle.error}>
                        Hotel Request Processing Unsuccessful
                        <br />
                        {currentState.errMsg}
                    </div>
                ) : ""}
        </div>
    );
}
