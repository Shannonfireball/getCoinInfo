import {configureStore} from "@reduxjs/toolkit"
import loadReducer from "../slice/loadCoins"
import SearchTermReducer  from "../slice/searchTermSlice";
import findReducer from "../slice/getCoin";

export default configureStore({
    reducer:{
       load: loadReducer,
       search:SearchTermReducer,
       find:findReducer     
    }
});