import { createSlice } from "@reduxjs/toolkit";
import { NEWS_FEED_META, NEWS_URLS, PRODUCT_URL } from "../../utils/constants";
import { apiCallBegin } from "../../store/actions";

const newsFeedSlice = createSlice({
    name: "newsFeed",
    initialState: {
        list: [],
        loading: false,
    },

    reducers: {
        articlesRequested: (state, action) => {
            state.loading = true;
        },
        articlesReceived: (state, action) => {
            
            const { payload } = action

            state.list = payload
            state.loading = false;
        },

        articlesRequestFailed: (state, action) => {
            state.loading = false;
        }
    },
})


const { articlesRequested, articlesReceived, articlesRequestFailed } = newsFeedSlice.actions

export const loadNewsFeed = (filters) => (dispatch) => {
   
    const params = {}
    const UrlfilterStr = getUrlFilterString(filters)

    console.log(filters)
    const { currentNFSource } = filters
    return dispatch(
        apiCallBegin({
            url: UrlfilterStr,
            currentNFSource,
            method: 'GET',
            params,
            onStart: articlesRequested.type,
            onSuccess: articlesReceived.type,
            onError: articlesRequestFailed.type,
        })
    );
};

const getUrlFilterString = (filters) => {
    const { currentNFSource  } = filters
    const NewsMetaFilters = NEWS_FEED_META[currentNFSource].filters
    let filterStr = NEWS_FEED_META[currentNFSource].url
    for(const key in filters) {
        if(NewsMetaFilters[key]) {
            filterStr += NewsMetaFilters[key].replace(key, filters[key])
        }
    }

    return filterStr
}



export default newsFeedSlice.reducer
