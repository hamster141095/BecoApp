import {
    GET_ALL_ITEMS,
    SET_IS_LOADING,
    GET_SEARCH_ITEMS,
    REMOVE_ALL_ITEMS,
} from "../types.js";

/// items ///

export const getAllItems = (items) => ({
    type: GET_ALL_ITEMS,
    payload: items,
});

export const removeAllItems = () => ({
    type: REMOVE_ALL_ITEMS,
});

export const getSearchItems = (items) => ({
    type: GET_SEARCH_ITEMS,
    payload: items,
});

export const setIsLoading = (isLoading) => ({
    type: SET_IS_LOADING,
    payload: isLoading,
});
