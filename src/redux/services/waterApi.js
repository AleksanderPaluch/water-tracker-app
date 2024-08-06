import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const requestWater = async () => {
  const { data } = await instance.get("/water");
  return data;
};

export const requestAddWater = async (info) => {
  const { data } = await instance.post("/water", info);
  return data;
};
export const requestDeleteWater = async (id) => {
  const { data } = await instance.delete(`/water/${id}`);
  return data;
};
