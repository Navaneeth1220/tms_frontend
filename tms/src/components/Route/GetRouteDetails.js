import React, { useState } from "react"
import DisplayRouteDetails from "./DisplayRouteDetails"
import errorStyle from "./errorStyle.module.css"

export default function GetRouteDetails(){


    let mockRoute = {
        routeId : "r1",
        routeFrom : "Jaipur",
        routeTo : "Himachal",
        pickupPoint : "Bus Stand",
        fare : 1200
      };

      const routeIdRef = React.createRef();

      const initialState = {routeId : undefined, route : mockRoute , errorMsg:undefined};

      const [currentState , setNewState] = useState(initialState);

      const submitHandler = (event) =>{
          event.preventDefault();
          let formData={...currentState};
        console.log("form data that has to be sent to service",formData);
      }

      const setFieldState=()=>{
          const routeIdValue = routeIdRef.current.value;
          const newState={...currentState,routeId:routeIdValue};
          setNewState(newState);
      }

      return (

        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label> Enter Route ID</label>
                    <input name="routeId" type="text" ref={routeIdRef} onChange={setFieldState} />
                    <button>Get Route Details</button>
                </div>
            </form>

        {
            currentState.route ? (
                <div>
                    <DisplayRouteDetails route = {currentState.route}/>
                </div>
            ) : ""
        }

        {
            currentState.errorMsg ? (
                <div className={errorStyle.error}>
                    Route Details request Failed
                    <br/>
                    {currentState.errorMsg}
                </div>

            ) : ""
        }
        

        </div>


      );

}