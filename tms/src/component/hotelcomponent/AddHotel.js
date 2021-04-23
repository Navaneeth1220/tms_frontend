
import React, { useState } from "react";
import DisplayHotelDetails from "./DisplayHotelDetails";
import commonStyle from "./commonStyle.module.css"
import validationMessage from '../../validationMessage';
import { useDispatch, useSelector } from "react-redux";
import { addHotelAction } from "../../redux/hotelredux/addhotel/addHotelActions";


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

    const initialState = {

        hotelName: undefined,
        hotelType: undefined,
        hotelDescription: undefined,
        address: undefined,
        rent: undefined,
        validations: { hotelName: undefined, hotelDescription: undefined, hotelType: undefined },
        //formStatus: ""
    };

    const [currentState, setNewState] = useState(initialState);

    const response = useSelector(state => {

        return (

            {

                hotel: state.addHotel.hotel,
                error: state.addHotel.error
            }
        );
    });

    const dispatch = useDispatch();


    const submitHandler = (event) => {

        event.preventDefault();
        //setNewState({ ...currentState, formStatus: "form submitted successfully" });
        if (currentState.validations.hotelName || currentState.validations.hotelType ||
            currentState.validations.hotelDescription) {

            return;
        }
        let data = { ...currentState };
        console.log("form data that has to be sent to service", data);
        dispatch(addHotelAction(data));

    };

    const setFieldState = (ref) => {

        const fieldName = ref.current.name;
        const fieldValue = ref.current.value;
        console.log("inside set field state field name = " + fieldName + " fieldValue= " + fieldValue);
        let validationMsg;
        if (ref === hotelNameRef) {

            validationMsg = validateHotelName(fieldValue);
        }

        if (ref === hotelTypeRef) {

            validationMsg = validateHotelType(fieldValue);
        }

        if (ref === hotelDescriptionRef) {

            validationMsg = validateHotelDescription(fieldValue);
        }

        const newValidations = { ...currentState.validations, [fieldName]: validationMsg };
        const newState = {

            ...currentState,
            [fieldName]: fieldValue,
            hotel: undefined,
            errMsg: undefined,
            validations: newValidations
        };

        setNewState(newState);

    };

    const validateHotelName = (hotelName) => {

        if (hotelName.length < 4) {

            return validationMessage.hotelNameSmallThanLengthFour;
        }

        return undefined;
    }

    const validateHotelType = (hotelType) => {

        if (hotelType.length > 10) {

            return validationMessage.hotelTypeGreaterThanLengthSix;
        }

        return undefined;
    }

    const validateHotelDescription = (hotelDescription) => {

        if (hotelDescription.length < 10) {

            return validationMessage.hotelDescriptionSmallThanLengthTen;
        }

        return undefined;
    }


    return (

        <div>
            <h1>Add Hotel </h1>

            <form onSubmit={submitHandler} className={commonStyle.content}>
                <div className="form-group">
                    <label>Enter Hotel Name </label>
                    <input
                        name="hotelName"
                        type="text"
                        ref={hotelNameRef}
                        onChange={() => setFieldState(hotelNameRef)}
                        className="form-control"
                        required />
                    {currentState.validations.hotelName ? (
                        <div className={commonStyle.error}>
                            {currentState.validations.hotelName}
                        </div>
                    ) : (
                        ""
                    )}

                </div>

                <div className="form-group">
                    <label>Enter Hotel Type </label>
                    <select
                        name="hotelType"
                        type="text"
                        ref={hotelTypeRef}
                        onChange={() => setFieldState(hotelTypeRef)}
                        className="form-control"
                        required>
                        <option disabled selected>Select Hotel Type</option>
                        <option value="three_star">Three_Star</option>
                        <option value="four_star">Four_Star</option>

                    </select>
                    {currentState.validations.hotelType ? (
                        <div className={commonStyle.error}>
                            {currentState.validations.hotelType}
                        </div>
                    ) : (
                        ""
                    )}
                </div>

                <div className="form-group">
                    <label>Enter HotelDescription</label>
                    <textarea id="hotelDescription" rows="4" cols="50"
                        name="hotelDescription"
                        type="text"
                        ref={hotelDescriptionRef}
                        onChange={() => setFieldState(hotelDescriptionRef)}
                        className="form-control"
                        required />
                    {currentState.validations.hotelDescription ? (
                        <div className={commonStyle.error}>
                            {currentState.validations.hotelDescription}
                        </div>
                    ) : (
                        ""
                    )}

                </div>

                <div className="form-group">
                    <label>Enter Hotel Address</label>
                    <textarea id="address" rows="4" cols="50"
                        name="address"
                        type="text"
                        ref={addressRef}
                        onChange={() => setFieldState(addressRef)}
                        className="form-control"
                        required />

                </div>

                <div className="form-group">
                    <label>Enter Hotel Rent</label>
                    <input
                        name="rent"
                        type="number"
                        ref={rentRef}
                        onChange={() => setFieldState(rentRef)}
                        className="form-control"
                        required />

                    <br />
                    <button className="btn-btn-primary">Add Hotel</button>
                </div>

            </form>


            {
                response.hotel ? (

                    <div>
                        <h3>Hotel Added Successfully</h3>
                        <DisplayHotelDetails hotel={response.hotel} />
                    </div>

                ) : ""}

            {
                response.error ? (

                    <div className={commonStyle.error}>
                        Hotel Request Was Not Successful <br />
                        {response.error}
                    </div>

                ) : ""}
        </div>
    );
}