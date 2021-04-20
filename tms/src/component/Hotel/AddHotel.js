
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
                    <label>Enter Hotel Name</label>
                    <select
                        name="hotelName"
                        type="text"
                        ref={hotelNameRef}
                        onChange={() => setFieldState(hotelNameRef)}>
                        <option value="guhantara">Guhantara</option>
                        <option value="leela_palace">Leela_Palace</option>
                    </select>
                </div>

                <div>
                    <label>Enter Hotel Type </label>
                    <select
                        name="hotelType"
                        type="text"
                        ref={hotelTypeRef}
                        onChange={() => setFieldState(hotelTypeRef)}>
                        <option value="three_star">Three_Star</option>
                        <option value="four_star">Four_Star</option>
                    </select>
                </div>

                <div>
                    <label>Enter HotelDescription</label>
                    <select
                        name="hotelDescription"
                        type="text"
                        ref={hotelDescriptionRef}
                        onChange={() => setFieldState(hotelDescriptionRef)}>
                        <option value="authentic_relaxing">Authentic_Relaxing</option>
                        <option value="luxurious_sparkling">Luxurious_Sparkling</option>
                    </select>
                </div>

                <div>
                    <label>Enter Hotel Address</label>
                    <select
                        name="address"
                        type="text"
                        ref={addressRef}
                        onChange={() => setFieldState(addressRef)}>
                        <option value="kanakapura">Kanakapura</option>
                        <option value="kodihalli">KodiHalli</option>
                    </select>
                </div>

                <div>
                    <label>Enter Hotel Rent</label>
                    <select
                        name="rent"
                        type="number"
                        ref={rentRef}
                        onChange={() => setFieldState(rentRef)}>
                        <option value="4720.0">4720.0</option>
                        <option value="5720.0">5720.0</option>
                    </select>
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