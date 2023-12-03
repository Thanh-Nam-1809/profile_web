export type IApiLoginBody = { email: string, password: string };


export interface IApiLoginResDataUser {
  password: null;
  id: number;
  name: string;
  email: string;
}