import { combineReducers } from "@reduxjs/toolkit";
import { errorReducer } from "./actions";
import NewsFeedReducer from "../features/newsFeed/NewsFeedSlice";

const rootReducer = combineReducers({
    newsFeed: NewsFeedReducer,
    errors: errorReducer    
 })

 export default rootReducer