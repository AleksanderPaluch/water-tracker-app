import { instance } from "./instace";

export const requestGetWater = async (formData) => {
  const { data } = await instance.get("/water/get", { params: formData });
  return data;
};

export const requestAddWater = async (formData) => {
  const { data } = await instance.post("/water/add", formData);
  return data;
};

export const requestEditWater = async (formData) => {
  const { data } = await instance.patch("/water/edit", formData);
  return data;
};

export const requestDeleteWater = async (id) => {
  console.log(id);
  const { data } = await instance.delete(`/water/remove/${id}`);
  return data;
};
