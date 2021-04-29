import updateCustomerConstants from "./updateCustomerConstants";

const intialState = {

    customer: undefined,
    error: ''

};

function updateCustomerReducer(state = intialState, action) {

    if (action.type === updateCustomerConstants.fail ||
        action.type === updateCustomerConstants.success) {

        let newState = { ...state, ...action };
        return newState;
    }

    return state;

}

export default updateCustomerReducer;