import { Http } from "./Http";

export const EditCantactServer = (obj,id) => {
  return Http.post(`/contact/${id}`, obj);
};
