import { createStore, applyMiddleware } from "redux";

// Import the `thunk` middleware
import thunk from "redux-thunk";

// Import the `composeWithDevTools` function from the `redux-devtools-extension` package
import { composeWithDevTools } from "redux-devtools-extension";

// Import the root reducer
import reducers from "./reducers";

// Get the `user_info` object from local storage, or use a default object if it doesn't exist
const userInfoLocalStorage = localStorage.getItem("user_info")
  ? JSON.parse(localStorage.getItem("user_info"))
  : {
      error: null,
      user: {
        id: "",
        name: "",
        token: "",
        email: "",
        authenticated: false,
      },
    };

// Define the initial state of the store
const initialState = {
  Auth: { user: userInfoLocalStorage },
};

// Create the store using the root reducer, initial state, and the `thunk` middleware
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
