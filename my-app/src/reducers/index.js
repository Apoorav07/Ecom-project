import { combineReducers } from "redux";
import authreducer from  './authreducer'
import loaderreducer from  './loaderreducer'
import productsreducer from "./productsreducer";
import categoryreducer from "./categoryreducer";

export default combineReducers({
  authreducer , loaderreducer , productsreducer,categoryreducer
})