// import external modules
import { combineReducers } from "redux";
// import internal(own) modules
import calenderReducer from "./calenderReducer";
import emailReducer from "./email/";
// import chatReducer from "./chatReducer";
import chatReducer from "./chat/";
import contactsReducer from "./contacts/";
import todoReducer from "./todo/";
import customizer from "./customizer/";
import deviceData from "./dashboard/device";
import ruleData from "./dashboard/rule";
import userData from "./dashboard/user";
import customerData from "./dashboard/customer";
import googleMap from "../reducers/googleMap/googleMap";
import login from "../reducers/login/loginToken";

import { reducer as toastrReducer } from "react-redux-toastr";

const rootReducer = combineReducers({
   calender: calenderReducer,
   emailApp: emailReducer,
   contactApp: contactsReducer,
   todoApp: todoReducer,
   toastr: toastrReducer, // <- Mounted at toastr.
   chatApp: chatReducer,
   customizer: customizer,
   deviceData: deviceData,
   ruleData: ruleData,
   userData: userData,
   customerData: customerData,
   googleMap: googleMap,
   login: login
});

export default rootReducer;