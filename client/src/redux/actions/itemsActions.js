import * as items from "./index";
import axios from "axios";

export const getAllItems = (category = "catalog") => {
    return async (dispatch, getState) => {
        try {
            dispatch(items.removeAllItems());
            const isLoading = getState().itemsReducer.isLoading;
            if (isLoading) {
                dispatch(items.setIsLoading(false));
            }
            const data = await axios.post("/api/items/load", { category });
            dispatch(items.getAllItems(data.data));
            dispatch(items.setIsLoading(true));
        } catch (error) {
            console.log(error);
        }
    };
};

export const getSearchItems = (reqKey, category) => async (
    dispatch,
    getState
) => {
    const isLoading = getState().itemsReducer.isLoading;

    if (isLoading) {
        dispatch(items.setIsLoading(false));
    }

    try {
        const item = await axios.post("/api/items/search", {
            reqKey,
            category,
        });
        dispatch(items.getAllItems(item.data));
        dispatch(items.setIsLoading(true));
    } catch (error) {
        console.log(error);
    }
};
