import React, { useState } from "react"
import DisplayCustomerDetails from "./DisplayCustomerDetails"
import commonStyle from "./commonStyle.module.css"





export default function GetCustomerDetails() {
    const customer5 = {
        customerId: 5,
        customerName: "nava",
        customerPassword: "navaa",
        customerAddress: "kanyakumari",
        customerPhonenumber: "445188",
        customerEmail: "nava@gmail.com"
    }

    const customerIdRef = React.createRef();

    const initialState = { customerId: undefined, customer: customer5, errMsg: undefined };

    const [currentState, setNewState] = useState(initialState);

    const submitHandler = (event) => {

        event.preventDefault();

    }

    const setFieldState = () => {

        const customerIdValue = customerIdRef.current.value;
        const newState = { ...currentState, customerId: customerIdValue };
        setNewState(newState);

    }



    return (

        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Enter Customer Id: </label>
                    <input
                        name="customerId"
                        type="number"
                        ref={customerIdRef}
                        onChange={setFieldState}

                    />
                    <button>Get Customer</button>

                </div>
            </form>

            {
                currentState.customer ? (
                    <div>
                        <DisplayCustomerDetails customer={currentState.customer} />
                    </div>

                ) : ""}

            {
                currentState.errMsg ? (
                    <div className={commonStyle.error}>
                        Customer Request Processing Unsuccessful
                        <br />
                        {currentState.errMsg}
                    </div>
                ) : ""}
        </div>
    );
}