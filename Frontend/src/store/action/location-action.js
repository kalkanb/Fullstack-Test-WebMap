export const GET_LOCATION_LIST_START = 'GET_LOCATION_LIST_START';
export const GET_LOCATION_LIST_END = 'GET_LOCATION_LIST_END';
export const GET_LOCATION_LIST_ERROR = 'GET_LOCATION_LIST_ERROR';

export const getLocationListStart = () => ({
    type: GET_LOCATION_LIST_START
});

export const getLocationListEnd = (payload) => ({
    type: GET_LOCATION_LIST_END,
    payload
});

export const getLocationListError = (error) => ({
    type: GET_LOCATION_LIST_ERROR,
    error
});