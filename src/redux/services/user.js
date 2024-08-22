import { instance } from "./instace";

export const requestCurrentUser = async () => {
    const { data } = await instance.get("/users/current");
    return data;
  };
  
  
  export const requestUpdateUser = async (formData) => {
    const { data } = await instance.patch("/users/update", formData);
    return data;
  };
  export const requestTotalUsers = async () => {
    const { data } = await instance.get("/users/total");
    return data;
  };
  
  export const requestUploadPhoto = async (formData) => {
    const { data } = await instance.patch("/users/avatars", formData);
    return data;
  };
  
  