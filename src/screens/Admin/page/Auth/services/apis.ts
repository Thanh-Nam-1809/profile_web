
import fetch from '../../../../../service/request';
import { IApiLoginBody } from './types/login';
export const login = (body: IApiLoginBody) => {
    return fetch({
        method: 'post',
        url: 'login',
        body,
    });
};

const apisAuth = {
    login,
};

export default apisAuth;