import { post } from "./service";

interface IFormData {
  mobile: string;
  name: string;
}

export const requestLogin = (formData: IFormData) => {
  return post("/login", formData);
};
