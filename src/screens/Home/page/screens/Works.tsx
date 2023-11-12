import React from 'react';
import style from '../../styles/index.module.scss'
import { dataProduct } from '../../../../assets/data/data';



const Works = () => {
    return (
        <section className={style.section}>
            <div className={style.container_works}>
                <div className={style.works_content}>
                    {dataProduct.map((item) => (
                        <div className={style.product_item}>
                            <img src={item.img} alt="" />
                            <div className={style.product_content}>
                                <p className={style.product_item_title}>{item.title}</p>
                                <p className={style.product_item_content}>{item.content}</p>
                                <p className={style.product_item_time}>{item.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Works;