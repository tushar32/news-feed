import Axios from "axios";

const axios = Axios.create({});

axios.defaults.timeout = 120000; // Milliseconds
axios.interceptors.request.use(
  async function (config) {
    // Retreive token from Redux OR localStorage or ....
    //const store = await getStore();
    const token = null// store?.getState()?.user?.token;

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
      config.headers["Access-Control-Allow-Credentials"] = true;
    }
    config.headers["Content-Type"] = "application/json";
    config.credentials = "same-origin";

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    if (error?.response?.status === 403) {
      // Handle forbidden error
    }
    if (error?.response?.status === 401) {
      // Handle unauthorized error (e.g., log out the user)
    }
    throw error; // Propagate the error
  }
);

export default axios;