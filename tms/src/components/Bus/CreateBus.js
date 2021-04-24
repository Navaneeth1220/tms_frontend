import { useDebugValue } from "react";
import React, { useState } from "react";
import DisplayBusDetails from "./DisplayBusDetails";
import errorStyle from "./errorStyle.module.css"


export default function CreateBus(){

    const bus = {
        busId : 1,
        busType : "AC/Seater",
        busNumber :"b1",
        capacity : 20
    };

    const busTypeRef = React.createRef();
    const busNumberRef = React.createRef();
    const capacityRef = React.createRef();

    const response={bus:bus, errMsg:undefined };

    const initialState = {
        busType : undefined,
        busNumber : undefined,
        capacity : undefined,
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
                <label>Choose a Bus Type </label>
                    <select name = "Bus Type" id = "busType" ref={busTypeRef} onChange={()=>setFieldState(busTypeRef)}> 
                    <option value="none" disabled selected hidden>Select Bus Type</option> 
                        <option value="AC/Seater">AC/Seater</option>
                        <option value = "Non-AC/Sleeper">Non-AC/Sleeper</option>
                        <option value="AC/Sleeper">AC/Sleeper</option>
                        <option value = "Non-AC/Seater">Non-AC/Seater</option>
                        </select>
                </div>
                <div>
                <label>Bus Number </label>
                    <input name="Bus Number" type="text" ref={busNumberRef} onChange={()=>setFieldState(busNumberRef)}/>
                </div>
                <div>
                    <label>Capacity </label>
                    <input name="Capacity" type="number" ref={capacityRef} onChange={()=>setFieldState(capacityRef)}/>
                    <br/>
                    <button type="submit">Create Bus</button>
                </div>
            </form>

            <h2>{currentState.formStatus}</h2>


            {
               response.bus ? (

                    <div>
                        <h2>Bus Registered Successfully</h2>
                        <DisplayBusDetails bus = {response.bus}/>
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