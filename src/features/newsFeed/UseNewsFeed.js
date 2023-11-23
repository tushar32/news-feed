import { useCallback, useDeferredValue, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadNewsFeed } from "./NewsFeedSlice";
import { debounce } from "../../utils/utils";


const UseNewsFeed = (filters) => {
    // Single responsiblity principle, KISS
    const dispatch = useDispatch();
    const { list, loading }  = useSelector((state) => state.newsFeed);
    const { searchQ, currentNFSource, date } = filters

    const delaySearch = useCallback(debounce((filters)=>{
      dispatch(loadNewsFeed(filters))
    }
  , 1000), [])

    useEffect(() => {
      if(searchQ) { // it will call api only when the search is p
         delaySearch(filters)
       }
      },[dispatch, searchQ, currentNFSource, date])

      
    return { list, loading}  
}

export default UseNewsFeed

