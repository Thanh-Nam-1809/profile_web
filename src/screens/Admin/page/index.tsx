import React from 'react';
import HeaderAdmin from './Header';
import HomePage from './Home';

const AdminPage = () => {
    return (
        <div>
            <HeaderAdmin/>
            <div>
                <HomePage/>
            </div>
        </div>
    );
};

export default AdminPage;