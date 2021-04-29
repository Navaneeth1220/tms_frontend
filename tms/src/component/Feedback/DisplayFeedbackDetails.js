

export default function DisplayFeedbackDetails({ feed }) {

    let { feedbackId,customerId,customerName,feedback,rating} = feed;

    return (

        <div>
            Feedback Id is {feedbackId}
            <br />
            Customer Id is {customerId}
            <br />
            Customer Name is {customerName}
            <br />
            Feedback is {feedback}
            <br />
            Rating is {rating}
            <br />
        </div>
    );
}