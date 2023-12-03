import { createSlice } from '@reduxjs/toolkit';
import { NAME_REDUCER } from './constants';
import actions from './actions';
import { IApiLoginResDataUser } from './types/login';

const initialState: any = {
  name: null,
  email: null,
  password: null,
};

export const Slice = createSlice({
  name: NAME_REDUCER,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(actions.login.success, (state, { payload }) => {
      const data: IApiLoginResDataUser = payload;
      state.name = data?.name ?? null;
      state.email = data?.email ?? null;
      state.password = data?.password ?? null;
    })
      ;
  },
});
const authServiceReducer = Slice.reducer;
export default authServiceReducer;
