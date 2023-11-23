import { validateSchema } from "../../utils/JsonSchemas";
import { NEWS_FEED_META } from "../../utils/constants";
import { travereseNestedObject } from "../../utils/utils";
import * as actions from "../actions";
import axios from "./../../utils/axios";

const api =
    ({ dispatch }) =>
    (next) =>
    async (action) => {
        if (action.type !== actions.apiCallBegin.type) return next(action);

        const { url, method, data,currentNFSource, params, onStart, onSuccess, onError } =
            action.payload;

        if (onStart) dispatch({ type: onStart });
        
        try {
            const response = await axios.request({
                url,
                method,
                params,
                data
            });
console.log(response)
            if(response.status === 200) {

                const heierarchy = NEWS_FEED_META[currentNFSource]['responseDataHierarchy']
                const result =  response.data
                let articles
                if(Array.isArray(heierarchy)) {
                    articles = travereseNestedObject(result, heierarchy)
                } else {
                    ({ [heierarchy]: articles } = response.data)
                }
                    // General
                dispatch(actions.apiCallSuccess(articles));
                // Specific
                if (onSuccess)
                    dispatch({ type: onSuccess, payload: articles });
                else if (onError) {
                    dispatch(actions.apiCallFailed('error'));

                    dispatch({ type: onError, payload: 'error' });
                }
                
            }
        } catch (error) {
            // General
            dispatch(actions.apiCallFailed(error.message));
            // Specific
            if (onError) dispatch({ type: onError, payload: error.message });
        }
    };

export default api;