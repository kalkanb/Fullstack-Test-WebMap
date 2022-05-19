import {
  getLocationListStart,
  getLocationListEnd,
  getLocationListError,
} from "../store/action/location-action";
import { locationClient } from "./client/axios-client";

const REST_URL = "/location";

const getAll = () => {
  return async (dispatch) => {
    try {
      dispatch(getLocationListStart());
      const result = await locationClient.get(REST_URL);
      dispatch(getLocationListEnd(result.data));
    } catch (error) {
      dispatch(getLocationListError(error));
      return Promise.reject(error);
    }
  };
};

const create = (data) => {
  return locationClient.post(REST_URL, data);
};

const get = (id) => {
  return locationClient.get(REST_URL + `/${id}`);
};

const update = (data) => {
  return locationClient.put(REST_URL, data);
};

const remove = (id) => {
  return locationClient.delete(REST_URL + `/${id}`);
};
export default { getAll, create, get, update, remove };
