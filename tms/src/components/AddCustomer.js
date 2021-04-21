import React, { useState } from "react";
import DisplayCustomerDetails from "./DisplayCustomerDetails";
import commonStyle from "./commonStyle.module.css"


export default function AddCustomer() {

    /*const customer1 = {
        customerId: 1,
        customerName: "msp",
        customerPassword: "Super3",
        customerAddress: "chennai",
        customerPhonenumber: "87544",
        customerEmail: "msp@gmail.com"
    }*/

    const customerNameRef = React.createRef();
    const customerPasswordRef = React.createRef();
    const customerAddressRef = React.createRef();
    const customerPhonenumberRef = React.createRef();
    const customerEmailRef = React.createRef();

    const response={ customer: undefined,errMsg: undefined };

    const initialState = {
        customerName: undefined,
        customerPassword: undefined,
        customerAddress: undefined,
        customerPhonenumber: undefined,
        customerEmail: undefined,
        formStatus: "",
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
                    <label>Enter Your Name</label>
                    <select
                        name="customerName"
                        type="text"
                        ref={customerNameRef}
                        onChange={() => setFieldState(customerNameRef)}>
                        <option value="msp">msp</option>
                        <option value="nava">nava</option>
                        <option value="shiv">shiv</option>
                    </select>
                </div>
                <div>
                    <label>Enter Your Password </label>
                    <select
                        name="customerPassword"
                        type="text"
                        ref={customerPasswordRef}
                        onChange={() => setFieldState(customerPasswordRef)}>
                        <option value="msp24">msp24</option>
                        <option value="nava15">nava15</option>
                        <option value="shiv13">shiv13</option>
                        </select>
                </div>
                <div>
                    <label>Enter Your Address</label>
                    <select
                        name="customerAddress"
                        type="text"
                        ref={customerAddressRef}
                        onChange={() => setFieldState(customerAddressRef)}>
                        <option value="chennai">chennai</option>
                        <option value="bangalore">bangalore</option>
                        <option value="delhi">delhi</option>
                        </select>
                </div>
                <div>
                    <label>Enter Your Phonenumber</label>
                    <select
                        name="customerPhonenumber"
                        type="text"
                        ref={customerPhonenumberRef}
                        onChange={() => setFieldState(customerPhonenumberRef)}>
                        <option value="8754489885">8754489885</option>
                        <option value="8754489884">8754489884</option>
                        <option value="8754489883">8754489883</option>
                    </select>
                </div>
                <div>
                    <label>Enter Your Email</label>
                    <select
                        name="customerEmail"
                        type="text"
                        ref={customerEmailRef}
                        onChange={() => setFieldState(customerEmailRef)}>
                        <option value="msp@gmail.com">msp@gmail.com</option>
                        <option value="nava@gmail.com">nava@gmail.com</option>
                        <option value="shiv@gmail.com">shiv@gmail.com"</option>
                    </select>   
                    <br />
                    <button type="submit">Add Customer</button>
                </div>
            </form>
            <h2>{currentState.formStatus}</h2>

            {
                response.customer ? (

                    <div>
                        <h2>Customer Added Successfully</h2>
                        <DisplayCustomerDetails customer={currentState.customer} />
                    </div>

                ) : ""}

            {
                response.errMsg ? (

                    <div className={commonStyle.error}>
                        Customer Request Was Not Successful <br />
                        {currentState.errMsg}
                    </div>

                ) : ""}
        </div>
    );
}