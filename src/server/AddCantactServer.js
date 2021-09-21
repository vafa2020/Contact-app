import { Http } from "./Http";

export const addContactServer = (obj) => {
  return Http.post("/contact", obj);
};
