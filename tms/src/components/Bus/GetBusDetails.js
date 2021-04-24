import React, { useState } from "react"
import DisplayBusDetails from "./DisplayBusDetails"
import errorStyle from "./errorStyle.module.css"

export default function GetBusDetails(){


    let mockBus = {
        busId : 1,
        busType : "AC/Seater",
        busNumber : "b1",
        capacity: 20
      };

      const busIdRef = React.createRef();

      const initialState = {busId : undefined, bus : mockBus , errorMsg:undefined};

      const [currentState , setNewState] = useState(initialState);

      const submitHandler = (event) =>{
          event.preventDefault();
          let formData={...currentState};
        console.log("form data that has to be sent to service",formData);
      }

      const setFieldState=()=>{
          const busIdValue = busIdRef.current.value;
          const newState={...currentState,busId:busIdValue};
          setNewState(newState);
      }

      return (

        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label> Enter Bus ID</label>
                    <input name="busId" type="number" ref={busIdRef} onChange={setFieldState} />
                    <button>Get Bus Details</button>
                </div>
            </form>

        {
            currentState.bus ? (
                <div>
                    <DisplayBusDetails bus = {currentState.bus}/>
                </div>
            ) : ""
        }

        {
            currentState.errorMsg ? (
                <div className={errorStyle.error}>
                    Bus Details request Failed
                    <br/>
                    {currentState.errorMsg}
                </div>

            ) : ""
        }
        

        </div>


      );

}