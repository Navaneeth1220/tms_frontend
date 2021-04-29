import React, { useState } from "react";
import style from "./style.css";
import validationMessage from '.././Route/validationMessage';
import { useDispatch, useSelector } from "react-redux";
import DisplayBusDetails from "./DisplayBusDetails";
import { addBusAction } from "../../redux/busredux/addBus/addBusActions";


export default function CreateBus(){

   /* const bus = {
        busId : 1,
        busType : "AC/Seater",
        busNumber :"b1",
        capacity : 20
    };*/

    const busTypeRef = React.createRef();
    const busNumberRef = React.createRef();
    const capacityRef = React.createRef();

   

    const initialState = {
        busType : undefined,
        busNumber : undefined,
        capacity : undefined,
        validations: { capacity: undefined},
        // formStatus : "",
    };

    const [currentState, setNewState] = useState(initialState);

    const response = useSelector(state => {

        return (

            {

                bus: state.addBus.bus,
                error: state.addBus.error
            }
        );
    });

    const dispatch = useDispatch();


    const submitHandler = (event) => {

        event.preventDefault();
        //setNewState({ ...currentState, formStatus: "form submitted successfully" });
        if (currentState.validations.capacity) {

            return;
        }
        let data = { ...currentState };
        console.log("form data that has to be sent to service", data);
        dispatch(addBusAction(data));

    };

    const setFieldState = (ref) => {

        const fieldName = ref.current.name;
        const fieldValue = ref.current.value;
        console.log("inside set field state field name = " + fieldName + " fieldValue= " + fieldValue);
        let validationMsg;
        if (ref === capacityRef) {

            validationMsg = validateCapacity(fieldValue);
        }

        const newValidations = { ...currentState.validations, [fieldName]: validationMsg };
        const newState = {

            ...currentState,
            [fieldName]: fieldValue,
            bus: undefined,
            errMsg: undefined,
            validations: newValidations
        };

        setNewState(newState);

    };

    const validateCapacity = (capacity) => {

        if (capacity>50) {

            return validationMessage.capacityLargerthanFifty;
        }

        return undefined;
    }

    return (
        <div>
            <form onSubmit = {(event)=> submitHandler(event)} className ={style}>
                <div className="form-group">
                <label>Choose a Bus Type </label>
                   <br></br>
                    <select name = "busType" id = "busType" ref={busTypeRef} onChange={()=>setFieldState(busTypeRef)} className="form-control" required> 
                    <option value="none" disabled selected >Select Bus Type</option> 
                        <option value="AC/Seater">AC/Seater</option>
                        <option value = "Non-AC/Sleeper">Non-AC/Sleeper</option>
                        <option value="AC/Sleeper">AC/Sleeper</option>
                        <option value = "Non-AC/Seater">Non-AC/Seater</option>
                        </select>
                </div>
                <div className="form-group">
                <label>Bus Number </label>
                    <input name="busNumber" type="text" ref={busNumberRef} onChange={()=>setFieldState(busNumberRef)} className="form-control" required/>
                </div>
                <div className="form-group">
                    <label>Capacity </label>
                    <input name="capacity" type="number" ref={capacityRef} onChange={()=>setFieldState(capacityRef)} className="form-control" required/>
                    {currentState.validations.capacity ? (
                        <div>
                            {currentState.validations.capacity }
                        </div>
                    ) : (
                        ""
                    )}
                    <br/>
                    <button className="btn-btn-primary">Create Bus</button>
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
                    <div className={style.error}>

                        {response.errMsg}
                    </div>
                ) : ""

            }
        </div>

    );
}