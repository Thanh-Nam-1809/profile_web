import { createAsyncAction } from '../../../../../service/actionConfigs';
import { PREFIX_ACTIONS } from './constants';
import { IApiLoginBody } from './types/login';

const login = createAsyncAction<IApiLoginBody>(PREFIX_ACTIONS + 'LOGIN');

const authActions = {
  login,
};

export default authActions;
