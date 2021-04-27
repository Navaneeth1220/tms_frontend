import React, { useState } from "react";
import DisplayCustomerDetails from "./DisplayCustomerDetails";
import commonStyle from "./commonStyle.module.css"
import validationMessage from "../../validationMessage";
import { useDispatch, useSelector } from "react-redux";
import { addCustomerAction } from "../../redux/customer/addCustomer/addCustomerActions";


export default function AddCustomer() {
    const customerNameRef = React.createRef();
    const customerPasswordRef = React.createRef();
    const addressRef = React.createRef();
    const mobileNoRef = React.createRef();
    const emailRef = React.createRef();

    const initialState = {

        customerName: undefined,
        customerPassword: undefined,
        address: undefined,
        mobileNo: undefined,
        email: undefined,
        validations: { customerName: undefined, customerPassword: undefined, address: undefined },
        //formStatus: ""
    };

    const [currentState, setNewState] = useState(initialState);

    const response = useSelector(state => {

        return (

            {

                customer: state.addCustomer.customer,
                error: state.addCustomer.error
            }
        );
    });

    const dispatch = useDispatch();


    const submitHandler = (event) => {

        event.preventDefault();
        //setNewState({ ...currentState, formStatus: "form submitted successfully" });
        if (currentState.validations.customerName || currentState.validations.customerPassword ||
            currentState.validations.address) {

            return;
        }
        let data = { ...currentState };
        console.log("form data that has to be sent to service", data);
        dispatch(addCustomerAction(data));

    };

    const setFieldState = (ref) => {

        const fieldName = ref.current.name;
        const fieldValue = ref.current.value;
        console.log("inside set field state field name = " + fieldName + " fieldValue= " + fieldValue);
        let validationMsg;
        if (ref === customerNameRef) {

            validationMsg = validateCustomerName(fieldValue);
        }

        if (ref === customerPasswordRef) {

            validationMsg = validateCustomerPassword(fieldValue);
        }

        if (ref === addressRef) {

            validationMsg = validateAddress(fieldValue);
        }

        const newValidations = { ...currentState.validations, [fieldName]: validationMsg };
        const newState = {

            ...currentState,
            [fieldName]: fieldValue,
            customer: undefined,
            errMsg: undefined,
            validations: newValidations
        };

        setNewState(newState);

    };

    const validateCustomerName = (customerName) => {

        if (customerName.length < 4) {

            return validationMessage.customerNameSmallThanLengthFour;
        }

        return undefined;
    }

    const validateCustomerPassword = (customerPassword) => {

        if (customerPassword.length < 8) {

            return validationMessage.customerPasswordSmallThanLengthEight;
        }

        return undefined;
    }

    const validateAddress = (address) => {

        if (address.length < 10) {

            return validationMessage.CustomerAddressSmallThanLengthTen;
        }

        return undefined;
    }


    return (

        <div>
            <h1>Add Customer </h1>

            <form onSubmit={submitHandler} className={commonStyle.content}>
                <div className="form-group">
                    <label>Enter Customer Name </label>
                    <input
                        name="customerName"
                        type="text"
                        ref={customerNameRef}
                        onChange={() => setFieldState(customerNameRef)}
                        className="form-control"
                        required />
                    {currentState.validations.customerName ? (
                        <div className={commonStyle.error}>
                            {currentState.validations.customerName}
                        </div>
                    ) : (
                        ""
                    )}

                </div>

                <div className="form-group">
                    <label>Enter Customer Password </label>
                    <input
                        name="customerPassword"
                        type="password"
                        ref={customerPasswordRef}
                        onChange={() => setFieldState(customerPasswordRef)}
                        className="form-control"
                        required></input>
                    {currentState.validations.customerPassword ? (
                        <div className={commonStyle.error}>
                            {currentState.validations.customerPassword}
                        </div>
                    ) : (
                        ""
                    )}
                </div>

                <div className="form-group">
                    <label>Enter address</label>
                    <textarea id="address" rows="4" cols="50"
                        name="address"
                        type="text"
                        ref={addressRef}
                        onChange={() => setFieldState(addressRef)}
                        className="form-control"
                        required />
                    {currentState.validations.address ? (
                        <div className={commonStyle.error}>
                            {currentState.validations.address}
                        </div>
                    ) : (
                        ""
                    )}

                </div>

                <div className="form-group">
                    <label>Enter mobilenumber</label>
                    <input
                        name="mobileNo"
                        type="text"
                        ref={mobileNoRef}
                        onChange={() => setFieldState(mobileNoRef)}
                        className="form-control"
                        required />

                </div>

                <div className="form-group">
                    <label>Enter email</label>
                    <input
                        name="email"
                        type="text"
                        ref={emailRef}
                        onChange={() => setFieldState(emailRef)}
                        className="form-control"
                        required />

                    <br />
                    <button className="btn-btn-primary">Add Customer</button>
                </div>

            </form>


            {
                response.customer ? (

                    <div>
                        <h3>Customer Added Successfully</h3>
                        <DisplayCustomerDetails customer={response.customer} />
                    </div>

                ) : ""}

            {
                response.error ? (

                    <div className={commonStyle.error}>
                        Customer Request Was Not Successful <br />
                        {response.error}
                    </div>

                ) : ""}
        </div>
    );
}