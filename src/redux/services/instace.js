import axios from "axios";

export const instance = axios.create({
  baseURL: "https://water-tracker-app-3d8d0b109609.herokuapp.com/",
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    const persistedState = localStorage.getItem("persist:root");

    if (persistedState) {
      const parsedState = JSON.parse(persistedState);

      if (parsedState.auth) {
        const authState = JSON.parse(parsedState.auth);
        const token = authState.token;

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
