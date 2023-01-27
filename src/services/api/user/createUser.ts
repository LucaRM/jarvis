import axios from "axios";
import {urlUser} from "../_api-routes";

export const addUser = async (
  email: string,
  password: string
): Promise<any> => {
  const res = await axios.post(`${urlUser}`, {
    email: email,
    password: password,
  });
  return res.data;
};
