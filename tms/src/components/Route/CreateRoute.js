import { useDebugValue } from "react";
import React, { useState } from "react";
import DisplayRouteDetails from "./DisplayRouteDetails";
import errorStyle from "./errorStyle.module.css"


export default function CreateRoute(){

    const route = {
        routeId : "r2",
        routeFrom : "Delhi",
        routeTo :"Manali",
        pickupPoint:"Bus Stand",
        fare : 600
    };

    const routeFromRef = React.createRef();
    const routeToRef = React.createRef();
    const pickupPointRef = React.createRef();
    const fareRef = React.createRef();

    const response={route:route, errMsg:undefined };

    const initialState = {
        routeFrom : undefined,
        routeTo : undefined,
        pickupPoint : undefined,
        fare : undefined,
        formStatus : "",
    };

    const [currentState,setNewState] = useState(initialState);

    const submitHandler = (event) =>{
        event.preventDefault();
//        setNewState({...currentState,formStatus:"Form submitted"});
        let formData={...currentState};
        console.log("form data that has to be sent to service",formData);
    };

    const setFieldState = (ref) =>{
        const fieldName = ref.current.name;
        const fieldValue = ref.current.value;
        console.log("inside set field state field name = "+fieldName+" fieldValue= "+fieldValue);
        const newState = {

            ...currentState,
            [fieldName] : fieldValue,
            errMsg : undefined,
        };

        setNewState(newState);
    }

    return (
        <div>
            <form onSubmit = {(event)=> submitHandler(event)}>
                <div>
                    <label>Route From </label>
                    <input name="routeFrom" type="text" ref={routeFromRef} onChange={()=>setFieldState(routeFromRef)}/>
                </div>
                <div>
                <label>Route To </label>
                    <input name="Route To" type="text" ref={routeToRef} onChange={()=>setFieldState(routeToRef)}/>
                </div>
                <div>
                    <label>Pickup Point </label>
                    <input name="pickupPoint" type="text" ref={pickupPointRef} onChange={()=>setFieldState(pickupPointRef)}/>
                </div>
                <div>
                    <label>Fare </label>
                    <input name="fare" type="number" ref={fareRef} onChange={()=>setFieldState(fareRef)}/>
                    <br/>
                    <button type="submit">Create Route</button>
                </div>
            </form>

            <h2>{currentState.formStatus}</h2>


            {
               response.route ? (

                    <div>
                        <h2>Route Created successfully</h2>
                        <DisplayRouteDetails route = {response.route}/>
                    </div>
                ) : ""
            }

            {
                response.errMsg ? (
                    <div className={errorStyle.error}>

                        {response.errMsg}
                    </div>
                ) : ""

            }
        </div>

    );
}