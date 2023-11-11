import React from 'react';
import style from './index.module.scss'
import { dataContact, dataIconProfile, dataIntroduceYourself } from '../../../assets/data/data';

console.log('dataIconProfile', dataIconProfile);

const Footer = () => {
    return (
        <div className={style.container_footer}>
            <div className={style.title}>Nam</div>
            <div className={style.footer}>
                <div className={style.footer_item}>
                    <div className={style.footer_introduce}>
                        {dataIntroduceYourself.map((item) => {
                            return (
                                <p>{item.title}</p>
                            );
                        })}
                    </div>
                    <div className={style.footer_contact}>
                        {dataContact.map((item) => {
                            return (
                                <p>{item.title}</p>
                            );
                        })}
                    </div>
                </div>

                <div className={style.logo_item}>
                    {dataIconProfile.map((item) => {
                        return (
                            <>{item.icon}</>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Footer;