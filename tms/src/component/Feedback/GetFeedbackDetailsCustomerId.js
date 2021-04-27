import React, { useEffect, useState } from "react"
import DisplayFeedbackDetails from "./DisplayFeedbackDetails"
import commonStyle from "./commonStyle.module.css"
import {fetchByCustomerId} from "../../service/FeedbackService";
import { addFeedbackAction } from "../../redux/feedbackredux/addfeedback/addFeedbackAction";

export default function GetFeedbackDetailsCustomerId() {
 const intialState={feedback:undefined,customerId:undefined,errMsg:undefined};
 const customerIdRef=React.createRef();
 const [currentState,setNewState]=useState(intialState);
 
 const submitHandler = (event) => {
    event.preventDefault();
         let data = {...currentState};
         console.log("data sent to service", data);
         dispatch(addFeedbackAction(data));
        };

        

    

    const setFieldState = () => {
        const idValue = customerIdRef.current.value;
        const newState = { ...currentState, customerId: idValue, feedback: undefined, errMsg: undefined };
        setNewState(newState);
    }
    return (
        <div>
            <h1> Get feedback details By customer id</h1>

            <div className={commonStyle.content}>
                <form onSubmit={submitHandler} className={commonStyle.content}>

                    <div className="form-group">
                        <label>Enter  Customer id</label>

                        <input name="customerId" type="number" ref={customerIdRef} onChange={setFieldState} className="form-control" />

                    </div>

                    <button className="btn btn-primary">Get Feedback</button>

                </form>

                {currentState.feedback ? (
                    <div>
                        <DisplayFeedbackDetails feed={currentState.feedback} />
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
