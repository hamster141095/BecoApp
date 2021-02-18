import {
    GET_ALL_ITEMS,
    SET_IS_LOADING,
    GET_SEARCH_ITEMS,
    REMOVE_ALL_ITEMS,
} from "../types.js";

const initialValues = {
    items: [],

    category: "",
    isLoading: false,
};

export default function ItemReducer(state = initialValues, action) {
    switch (action.type) {
        case GET_ALL_ITEMS: {
            return { ...state, items: action.payload };
        }
        case SET_IS_LOADING: {
            return { ...state, isLoading: action.payload };
        }
        case GET_SEARCH_ITEMS: {
            return { ...state, items: action.payload };
        }
        case REMOVE_ALL_ITEMS: {
            return { ...state, items: {} };
        }

        default:
            return state;
    }
}
