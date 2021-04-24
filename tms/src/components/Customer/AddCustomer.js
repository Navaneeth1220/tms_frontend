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

    const response = { customer: undefined, errMsg: undefined };

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
                    <label>Enter Your Name</label>
                    <input
                        name="customerName"
                        type="text"
                        ref={customerNameRef}
                        onChange={() => setFieldState(customerNameRef)}/>
                        
                </div>
                <div>
                    <label>Enter Your Password </label>
                    <input
                        name="customerPassword"
                        type="text"
                        ref={customerPasswordRef}
                        onChange={() => setFieldState(customerPasswordRef)}/>
                       
                </div>
                <div>
                    <label>Enter Your Address</label>
                    <input
                        name="customerAddress"
                        type="text"
                        ref={customerAddressRef}
                        onChange={() => setFieldState(customerAddressRef)}/>
                        
                </div>
                <div>
                    <label>Enter Your Phonenumber</label>
                    <input
                        name="customerPhonenumber"
                        type="text"
                        ref={customerPhonenumberRef}
                        onChange={() => setFieldState(customerPhonenumberRef)}/>
                      
                </div>
                <div>
                    <label>Enter Your Email</label>
                    <input
                        name="customerEmail"
                        type="text"
                        ref={customerEmailRef}
                        onChange={() => setFieldState(customerEmailRef)}/>
                    
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