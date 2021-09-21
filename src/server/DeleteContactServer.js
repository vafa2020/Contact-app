import { Http } from "./Http";

export const deleteContactServer = (id) => {
  return Http.delete(`/contact/${id}`);
};
