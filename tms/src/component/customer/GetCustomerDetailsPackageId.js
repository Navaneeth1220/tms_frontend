import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCustomerByPackageId } from "../../service/CustomerService";
import commonStyle from "./commonStyle.module.css"
import DisplayCustomerDetails from "./DisplayCustomerDetails"
import DisplayCustomerList from "./DisplayCustomerList";






export default function GetCustomerDetailsPackageId() {
    

    const packageIdRef = React.createRef();

    const intitalState = { packageId: undefined ,customers : undefined ,errMsg : undefined };

    const [currentState, setNewState] = useState(intitalState);

    



    const submitHandler = (event) => {
        event.preventDefault();
        console.log("current state", currentState);
         const packageId=packageIdRef.current.value;
         const promise = fetchCustomerByPackageId(packageId);
         promise.then(response=>{
             const newState={...currentState,customers:response.data};
             setNewState (newState);
            }).catch(error=>{
                const newState={...currentState,errMsg:error.message};
                setNewState(newState);
            }
            )

        

    }

    const setFieldState = () => {
        const idValue = packageIdRef.current.value;
        const newState = { ...currentState, packageId: idValue, customer: undefined, errMsg: undefined };
        setNewState(newState);
    }

    return (
        <div>
            <h1> Get customer details By Package id</h1>

            <div className={commonStyle.content}>
                <form onSubmit={submitHandler} className={commonStyle.content}>

                    <div className="form-group">
                        <label>Enter  Package id</label>

                        <input name="packageId" type="number" ref={packageIdRef} onChange={setFieldState} className="form-control" />

                    </div>

                    <button className="btn btn-primary">Get Customer</button>

                </form>

                {currentState.customers ? (
                    <div>
                        <DisplayCustomerList customers={currentState.customers} />
                    </div>
                ) : ''}


                {
                    currentState.errMsg ? (

                        <div className={commonStyle.error}>
                            Request processing unsuccessful
                            <br />
                            {currentState.errMsg}

                        </div>
                    ) : ''

                }
            </div>
        </div>

    );

}
