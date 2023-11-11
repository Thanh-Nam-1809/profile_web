import React from 'react';
import { Navigate } from 'react-router-dom';

type ShieldComponent = ((props: any) => JSX.Element) | React.LazyExoticComponent<(props: any) => JSX.Element>;

const useRefreshToken = () => {

    const shield = (Component: ShieldComponent) => {
        <Navigate to={'/'} replace />;
        return <Component />;
    };

    return { shield };
};

export default useRefreshToken;