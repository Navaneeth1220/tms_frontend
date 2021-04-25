import React, { useEffect, useState } from "react"
import DisplayCustomerDetails from "./DisplayCustomerDetails"
import commonStyle from "./commonStyle.module.css"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { fetchCustomerByRouteId} from "../../redux/customer/fetchCustomerByRouteId/fetchCustomerByRouteIdActions"

export default function GetCustomerDetailsByRouteId() {
    

    const routeIdRef = React.createRef();

    const intitalState = { routeId: undefined };

    const [currentState, setNewState] = useState(intitalState);

    const response=useSelector(state=>{
        return ({
          customer:state.fetchCustomerByRouteId.customer,
          error: state.fetchCustomerByRouteId.error
        });
    })

    const dispatch=useDispatch();



    const submitHandler = (event) => {
        event.preventDefault();
        console.log("current state", currentState);
         const routeId=routeIdRef.current.value;
         dispatch(fetchCustomerByRouteId(routeId));

    }

    const setFieldState = () => {
        const idValue = routeIdRef.current.value;
        const newState = { ...currentState, routeId: idValue, customer: undefined, errMsg: undefined };
        setNewState(newState);
    }

    return (
        <div>
            <h1> Get customer details By Route id</h1>

            <div className={commonStyle.content}>
                <form onSubmit={submitHandler} className={commonStyle.content}>

                    <div className="form-group">
                        <label>Enter  Route id</label>

                        <input name="routeId" type="number" ref={routeIdRef} onChange={setFieldState} className="form-control" />

                    </div>

                    <button className="btn btn-primary">Get Customer</button>

                </form>

                {response.customer ? (
                    <div>
                        <DisplayCustomerDetails customer={response.customer} />
                    </div>
                ) : ''}


                {
                    response.error ? (

                        <div className={commonStyle.error}>
                            Request processing unsuccessful
                            <br />
                            {response.error}

                        </div>
                    ) : ''

                }
            </div>
        </div>

    );

}