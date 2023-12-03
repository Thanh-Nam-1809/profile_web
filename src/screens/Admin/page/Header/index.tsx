import React from 'react';
import styled from 'styled-components';
import Logo_Profile from '../../../../assets/images/Logo_Profile_2.png';

const HeaderAdmin = () => {
    return (
        <HeaderAdmim>
            <img src={Logo_Profile} alt="" />
            <h1>Hy Nam Development</h1>
        </HeaderAdmim>
    );
};

export default HeaderAdmin;

const HeaderAdmim = styled.div`
display: flex;
gap: 50px;
justify-content: center;
    align-items: center;
img {
    width: 300px;
}
h1 {
    margin: 0;
    color: #000000;
    font-size: 80px;
}
`;