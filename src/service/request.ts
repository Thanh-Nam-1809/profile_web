import axios, { AxiosRequestConfig } from 'axios';
import queryString from 'query-string';

// const DOMAIN = process.env.REACT_APP_API_URL;
const DOMAIN = 'http://127.0.0.1:8000/api/';

const axiosInstance = axios.create({
  baseURL: DOMAIN,
  headers: {
    Accept: 'application/json',
    'Accept-Heya': 'application/myheya.heyapos',
  },
});

type mixType = string | number | null;

type IFetchArg = {
  method?: 'get' | 'post' | 'delete' | 'put';
  url: string;
  body?: Record<string, mixType | unknown> | FormData;
  params?: Record<string, mixType | Array<mixType>>;
  configs?: AxiosRequestConfig<Record<string, unknown | mixType>> | undefined;
};
const fetch = async ({
  method = 'get',
  url = '',
  body = {},
  params = {},
  configs = {},
}: IFetchArg) => {
  const paramsPasser = queryString.stringify(
    { ...params },
    { arrayFormat: 'bracket' }
  );
  let urlWithParams = url + '?' + paramsPasser;

  const getAxios = async () => {
    switch (method) {
      case 'post':
        return await axiosInstance.post(urlWithParams, body, configs);
      case 'put':
        return await axiosInstance.put(urlWithParams, body, configs);
      case 'delete':
        return await axiosInstance.delete(urlWithParams, configs);
      default:
        return await axiosInstance.get(urlWithParams, configs);
    }
  };

  try {
    const res = await getAxios();
    return res;
  } catch (error) {
    // const statusMessage = get(error, 'response.data.status');
    // if(statusMessage === 'Token is Blacklisted') {
    //   storage.isConfirmDevice.set('true');
    // } else {
    //   storage.isConfirmDevice.set('');
      
    // }

    // const status = lodash.get(error, 'response.status');
    // if (status === 401 || status === 403) {
    //   // handle refresh token here
    // }
    return Promise.reject(error);
  }
};

export default fetch;
