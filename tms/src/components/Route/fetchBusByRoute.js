import React, { useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import style from './style.css';
import {fetchBusByRouteAction} from '../../redux/routeredux/fetchbusbyroute/fetchBusByRouteActions'
import DisplayBusListUsingRoute from "./DisplayBusListUsingRoute";




export default function FetchBusByRoute() {
    
    const routeIdRef = React.createRef();

    const initialState = {routeId : undefined};

    const [currentState, setNewState]= useState(initialState);

    const response = useSelector(state=>{
        return ({
            bus : state.fetchBusByRoute.bus,
            error : state.fetchBusByRoute.error
        });
    })

    const dispatch = useDispatch();

    const submitHandler = (event) => {

        event.preventDefault();
        console.log("current state", currentState);
        const routeId = routeIdRef.current.value;
        dispatch(fetchBusByRouteAction(routeId));

    }

    const setFieldState = () => {

        const routeIdValue = routeIdRef.current.value;
        const newState = { ...currentState, routeId: routeIdValue, bus: undefined, errMsg: undefined };
        setNewState(newState);
        console.log("inside set field state ");
    }

    return (
        <div>
            <h1> Route History</h1>

            <div className={style.content}>
                <form onSubmit={submitHandler} className={style.content}>

                    <div className="form-group">
                        <label>Enter Route Id</label>

                        <input name="routeId" type="text" ref={routeIdRef} onChange={setFieldState} className="form-control"/>
                    </div>

                    <button className="btn btn-primary">Get Bus</button>
                </form>

                {response.bus ? (
                    <div>
                        <DisplayBusListUsingRoute buses={response.bus} />
                    </div>
                ) : ''}


                {
                    response.error ? (

                        <div className={style.error}>
                            Get Bus On Request Processing Unsuccessful
                            <br />
                            {response.error}

                        </div>
                    ) : ''

                }
            </div>
        </div>

    )

}