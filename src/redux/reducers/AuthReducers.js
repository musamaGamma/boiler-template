// Import the action types
import {
  LOGIN_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from "../types";

// Define the initial state of the `Auth` slice of the store
const authState = {
  error: null,
  msg: "",
  user: {
    id: "",
    name: "",
    email: "",
    token: "",
    authenticated: false,
  },
};

// This is the `Auth` reducer function
export const AuthReducer = (state = authState, action) => {
  switch (action.type) {
    // When the login request starts
    case LOGIN_USER_REQUEST:
      return { ...state, loading: true };

    // When the login request succeeds
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: { ...action.payload, authenticated: true },
      };

    // When the login request fails
    case LOGIN_USER_FAIL:
      return { ...state, loading: false, error: action.payload };

    // When the registration request starts
    case REGISTER_USER_REQUEST:
      return { ...state, loading: true };

    // When the registration request succeeds
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: { ...action.payload, authenticated: true },
      };

    // When the registration request fails
    case REGISTER_USER_FAIL:
      return { ...state, loading: false, error: action.payload };

    // When the user logs out
    case LOGOUT:
      return {
        ...state,
        loading: false,
        msg: action.payload,
        error: null,
        user: { id: "", token: "", authenticated: false, name: "", email: "" },
      };

    // Default case
    default:
      return state;
  }
};
