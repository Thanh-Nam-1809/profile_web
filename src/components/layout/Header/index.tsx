import React from 'react';
import style from './index.module.scss'
import { dataHeader } from '../../../assets/data/data';

const Header = () => {
    return (
        <div className={style.container_header}>
            <div className={style.title}>Nam</div>
            <div className={style.menu_information}>
                {dataHeader.map((item) => {
                    return(
                        <button>{item.title}</button>
                    );
                })}
            </div>
        </div>
    );
};

export default Header;