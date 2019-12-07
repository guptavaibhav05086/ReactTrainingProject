import isEmpty from "../validations/is-empty";
import { SET_CURRENT_USER } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {}
};
//edf enter to create function
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload), //If payload has data it will be true else false
        user: action.payload
      };
      break;
    default:
      return state;
  }
}
