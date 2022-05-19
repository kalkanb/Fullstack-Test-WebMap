import {
    GET_LOCATION_LIST_START,
    GET_LOCATION_LIST_END,
    GET_LOCATION_LIST_ERROR
} from '../action/location-action'

const initialState = {
    locationList: [],
    isLoading: false
};

export default (state = initialState, action = undefined) => {
    switch (action.type) {
        case GET_LOCATION_LIST_START:
            return {
                ...state,
                isLoading: true
            };
        case GET_LOCATION_LIST_END:
            return {
                ...state,
                locationList: action.payload,
                isLoading: false
            };
        case GET_LOCATION_LIST_ERROR:
            return {
                ...state,
                isLoading: false
            };
        default:
            return initialState;
    }
};