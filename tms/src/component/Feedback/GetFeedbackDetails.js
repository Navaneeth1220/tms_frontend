
import React, { useState } from "react"
import DisplayFeedbackDetails from "./DisplayFeedbackDetails"
import commonStyle from "./commonStyle.module.css"
import {fetchFeedbackById} from "../../service/FeedbackService";





export default function GetFeedbackDetails() {

    const feedbackIdRef = React.createRef();

    const initialState = { feedbackId: undefined, feedback: undefined, errMsg: undefined };

    const [currentState, setNewState] = useState(initialState);

    const submitHandler = (event) => {

        event.preventDefault();
        const feedbackId = feedbackIdRef.current.value;
        const promise = fetchFeedbackById(feedbackId);
         promise.then(response=>{
             const newState={...currentState,feedback:response.data};
             setNewState (newState);
            }).catch(error=>{
                const newState={...currentState,errMsg:error.message};
                setNewState(newState);
            }
            )
    }

    const setFieldState = () => {

        const feedbackIdValue = feedbackIdRef.current.value;
        const newState = { ...currentState, feedbackId: feedbackIdValue };
        setNewState(newState);

    }



    return (

        <div>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label>Enter Feedback Id: </label>
                    <input
                        name="feedbackId"
                        type="number"
                        ref={feedbackIdRef}
                        onChange={setFieldState}
                        className="form-control"
                    />
                    <button>Get Feedback</button>

                </div>
            </form>

            {
                currentState.feedback ? (
                    <div>
                        <DisplayFeedbackDetails feed={currentState.feedback} />
                    </div>

                ) : ""}

            {
                currentState.errMsg ? (
                    <div className={commonStyle.error}>
                        Feedback Request Processing Unsuccessful
                        <br />
                        {currentState.errMsg}
                    </div>
                ) : ""}
        </div>
    );
}