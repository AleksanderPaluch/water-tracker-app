import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api",
});



export const requestSignUp = async (formData) => {
    console.log("instance");
  const { data } = await instance.post("/users/register", formData);
  return data;
};

export const requestLogIn = async (formData) => {
  const { data } = await instance.post("/users/login", formData);
  return data;
};

export const requestLogOut = async () => {
  const { data } = await instance.post("/users/logout" );
  return data;
};
