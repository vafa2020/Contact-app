import { Http } from "./Http";

export const EditCantactServer = (obj,id) => {
  return Http.put(`/contact/${id}`, obj);
};
