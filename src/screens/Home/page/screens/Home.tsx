import React from 'react';
import style from '../../styles/index.module.scss'
import { dataIconProfile } from '../../../../assets/data/data';
import scroll_image from '../../../../../src/assets/images/scrolldown.png';
import Logo_Profile_2 from '../../../../../src/assets/images/Logo_Profile_2.png'
const Home = () => {
    return (
        <section className={style.section}>
            <div className={style.container_home}>
                <div className={style.container_title}>
                    <div className={style.title_item}>
                        <p className={style.title_welcome}>Hello people!</p>
                        <p className={style.title}>This is the title of ...</p>
                    </div>
                    <div className={style.circle}>
                        <div className={`${style.layer} ${style.layer_0}`}>
                            <h1><img src={Logo_Profile_2} alt="" /></h1>
                            
                            <img className={style.animation_0} src={scroll_image} alt="" />
                        </div>
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
        </section>
    );
};

export default Home;