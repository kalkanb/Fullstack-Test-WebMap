import axios from "axios";
import { RestCallEmitter } from "./rest-call-emitter";

export const getClient = (options = {}) => {
  const client = axios.create(options);

  client.interceptors.request.use(
    (config) => {
      console.info("Axios Interceptor Request", config);
      return config;
    },
    (error) => {
      console.error("Axios Interceptor Request: ", error);
      return Promise.reject(error);
    }
  );
  
  client.interceptors.response.use(
    (response) => {
      console.info("Axios Interceptor Response : ", response);
      if (response.data.errorType) {
        let responseError = {
          ...response,
          data: { ...response.data },
        };
        RestCallEmitter.emit("reponse_error", responseError);
        return Promise.reject(response.data);
      }
      return response;
    },
    (error) => {
      if (error.response && error.response.data) {
        console.error("Axios Interceptor Response : ", error.response);

        let responseError = {
          ...error.response,
          data: {
            ...error.response.data,
          },
        };
        RestCallEmitter.emit("reponse_error", responseError);
        return Promise.reject(error.response);
      }

      console.log(error.toJSON());
      RestCallEmitter.emit("network_error", error.toJSON());
      return Promise.reject(error.toJSON());
    }
  );

  return client;
};

export default {
  async get(url, conf = {}) {
    try {
      const response = await getClient().get(url, conf);
      return await Promise.resolve(response);
    } catch (error) {
      return await Promise.reject(error);
    }
  },

  async delete(url, conf = {}) {
    try {
      const response = await getClient().delete(url, conf);
      return await Promise.resolve(response);
    } catch (error) {
      return await Promise.reject(error);
    }
  },

  async head(url, conf = {}) {
    try {
      const response = await getClient().head(url, conf);
      return await Promise.resolve(response);
    } catch (error) {
      return await Promise.reject(error);
    }
  },

  options(url, conf = {}) {
    return getClient()
      .options(url, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  },

  async post(url, data = {}, conf = {}) {
    try {
      const response = await getClient().post(url, data, conf);
      return await Promise.resolve(response);
    } catch (error) {
      return await Promise.reject(error);
    }
  },

  async put(url, data = {}, conf = {}) {
    try {
      const response = await getClient().put(url, data, conf);
      return await Promise.resolve(response);
    } catch (error) {
      return await Promise.reject(error);
    }
  },

  async patch(url, data = {}, conf = {}) {
    try {
      const response = await getClient().patch(url, data, conf);
      return await Promise.resolve(response);
    } catch (error) {
      return await Promise.reject(error);
    }
  },
};
