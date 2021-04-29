import React, { useEffect, useState } from "react"
import DisplayCustomerDetails from "./DisplayCustomerDetails"
import commonStyle from "./commonStyle.module.css"
import { fetchCustomerByRouteid } from "../../service/CustomerService";
import DisplayCustomerList from "./DisplayCustomerList";


export default function GetCustomerDetailsByRouteId() {
    

    const routeIdRef = React.createRef();

    const intitalState = { routeId: undefined , customers : undefined, errMsg : undefined};

    const [currentState, setNewState] = useState(intitalState);




    const submitHandler = (event) => {
        event.preventDefault();
        console.log("current state", currentState);
         const routeId=routeIdRef.current.value;
         const promise = fetchCustomerByRouteid(routeId);
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
        const idValue = routeIdRef.current.value;
        const newState = { ...currentState, routeId: idValue, customers: undefined, errMsg: undefined };
        setNewState(newState);
    }

    return (
        <div>
            <h1> Get customer details By Route id</h1>

            <div className={commonStyle.content}>
                <form onSubmit={submitHandler} className={commonStyle.content}>

                    <div className="form-group">
                        <label>Enter  Route id</label>

                        <input name="routeId" type="text" ref={routeIdRef} onChange={setFieldState} className="form-control" />

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