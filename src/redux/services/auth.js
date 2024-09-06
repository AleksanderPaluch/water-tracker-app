import { instance } from "./instace";

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
export const requestResetMail = async (formData) => {
  const { data } = await instance.post("/users/reset-mail", formData);
  return data;
};
export const requestChangePassword = async (formData) => {
  const { data } = await instance.post("/users/change-password", formData);
  return data;
};

export const requestTokenRefresh = async () => {
  const { data } = await instance.post("/users/token-refresh");
  return data;
};

export const requestAuthGoogle = async (formData) => {
  console.log(formData);
  const { data } = await instance.post("/users/google-auth", formData);
  return data;
};


