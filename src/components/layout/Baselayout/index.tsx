
import React from 'react';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';
import styles from './index.module.scss';
import { ConfigProvider } from 'antd';
import Header from '../Header';

const BaseLayout = () => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: 'var(--color-primary)',
                    fontFamily: '"Inter", sans-serif',
                },
            }}>
            <div className='container'>
                <Header />
                <main className={styles.private_content}>
                    <div className={styles.content_inner}>
                        <Outlet />
                    </div>
                </main>
                <Footer/>
            </div>
        </ConfigProvider>
    );
};

export default BaseLayout;