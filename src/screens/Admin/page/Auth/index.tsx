import { Form, Input } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import apisAuth from './services/apis';
import { useSetLoadingPage } from '../../../../service/UI/LoadingPage';
import { useAppDispatch } from '../../../../store/hooks';
import { useNavigate } from 'react-router-dom';
import actions from './services/actions'
import { get } from 'lodash';

type IAuthForm = {
    email: string;
    password: string;
}

const LoginPage = () => {
    const [form] = Form.useForm();
    const dispatch = useAppDispatch();
    const [, setError] = useState('');

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const setIsLoading = useSetLoadingPage();

    const setupLogin = (resData: any) => {
        dispatch(actions.login.success(resData));

        navigate(
            '/HyNam/Home'
        );
    };

    const login = async (values: IAuthForm) => {
        const { email, password } = values;

        setIsLoading(true);
        try {
            const res = await apisAuth.login({ email, password });

            const resData = res?.data?.data;

            setupLogin(resData);


        } catch (error) {
            const message = get(
                error,
                'response.data.error.message',
                'An error has occurred. Please try again !'
            );
            setError(message);
            dispatch(actions.login.fail({}));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <StyledLogin>
            <div className='container'>
                <h1>Login</h1>
                <Form
                    onFinish={login}
                    form={form}>
                    <Form.Item name='email' label='Email'>
                        <Input placeholder='Enter email' />
                    </Form.Item>
                    <Form.Item name='password' label='Password'>
                        <Input.Password placeholder='Enter Password' />
                    </Form.Item>
                    <button type='submit'>Login</button>
                </Form>
            </div>
        </StyledLogin>
    );
};

export default LoginPage;
const StyledLogin = styled.div`
`;