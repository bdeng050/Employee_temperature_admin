import { createStore , applyMiddleware} from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";
//reducer can only accept state, but can not change state
const store=createStore(reducer,
    applyMiddleware(thunk))
export default store