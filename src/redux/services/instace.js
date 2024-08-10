import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api",
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

export const requestSignUp = async (formData) => {
  const { data } = await instance.post("/users/register", formData);
  return data;
};

export const requestLogIn = async (formData) => {
  const { data } = await instance.post("/users/login", formData);
  return data;
};

export const requestLogOut = async (formData) => {
  const { data } = await instance.post("/users/logout", formData);
  return data;
};