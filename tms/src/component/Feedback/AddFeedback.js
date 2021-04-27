import React, { useState } from "react";
import DisplayFeedbackDetails from "./DisplayFeedbackDetails";
import commonStyle from "./commonStyle.module.css"
import { addFeedbackAction } from "../../redux/feedbackredux/addfeedback/addFeedbackAction";
import { data } from "jquery";
import { useDispatch, useSelector } from "react-redux";

export default function AddFeedback() {


    const feedbackRef = React.createRef();
    const ratingRef = React.createRef();
    const customerIdRef = React.createRef();
    const dispatch=useDispatch();
    const initialState = {

        feedback: undefined,
        rating: undefined,
        customerId:undefined,
    };


     const [currentState, setNewState] = useState(initialState);

     const response = useSelector(state => {

        return (

            {

                feed: state.addFeedback.feed,
                error: state.addFeedback.error
            }
        );
    });

    const submitHandler = (event) => {

        event.preventDefault();
        //setNewState({ ...currentState, formStatus: "form submitted successfully" });

        let formData = { ...currentState };
        console.log("form data that has to be sent to service", formData)
        dispatch(addFeedbackAction(formData))
    
      };  

      const setFieldState = (ref) => {

        const fieldName = ref.current.name;
        const fieldValue = ref.current.value;
        const newState = {

            ...currentState,
            [fieldName]: fieldValue,
            errMsg: undefined,
        };

        setNewState(newState);


    };

    return (

      <div className="container">
          <form onSubmit={(event) => submitHandler(event)}>
              <div className="form-group">
                  <label>Enter Feedback</label>
                  <select
                  className="form-control"
                      name="feedback"
                      type="text"
                      ref={feedbackRef}
                      onChange={() => setFieldState(feedbackRef)}>
                      <option value="Good">Good</option>
                      <option value="Average">Average</option>
                      <option value="Bad">Bad</option>
                      </select>
                  
              </div>
        
              <div className="form-group"> 
                  <label>Enter Rating</label>
                  <select
                  className="form-control"
                      name="rating"
                      type="number"
                      ref={ratingRef}
                      onChange={() => setFieldState(ratingRef)}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      </select>
                  <br /> 
              </div>
              <div classname="form-group">
                  <label>Enter Customer Id</label>
                  <input classname="form-control" name="customerId" type="number" 
                  ref={customerIdRef} onChange={()=>setFieldState(customerIdRef)}/>
              </div>
              <button type="submit" className="btn btn-primary">Add Feedback</button>
          </form>

          {
              response.feed ? (

                  <div>
                      <h2>Feedback Added Successfully</h2>
                      <DisplayFeedbackDetails feed={response.feed} />
                  </div>

              ) : ""}

          {
              response.errMsg ? (

                  <div className={commonStyle.error}>
                      Feedback Request Was Not Successful <br />
                      {response.errMsg}
                  </div>

              ) : ""}
      </div>
    )
              }  
