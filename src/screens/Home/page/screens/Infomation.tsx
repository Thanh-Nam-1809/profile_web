import React from 'react';
import style from '../../styles/index.module.scss'
const Infomation = () => {
    return (
        <section className={style.section}>
            <div className={style.container_information}>
                <div className={style.information_title}>
                    <p className={style.title_about}>About myself</p>
                    <div className={style.content}>
                    <p>Chào mừng bạn đến với trang web của tôi! Tôi là một Deverlopment với niềm đam mê lớn đối với lập trình, và tôi tự hào được giới thiệu với bạn về sứ mệnh và cam kết tôi.</p>
                    <p>Tôi đã 2 năm hoạt động trong ngành và đã tích luỹ được nhiều kinh nghiệm quý báu. Tôi luôn đặt khách hàng lên hàng đầu và luôn cố gắng đáp ứng mọi yêu cầu của họ một cách tốt nhất. Điều này đã giúp yôi xây dựng danh tiếng mạnh mẽ trong ngành.</p>
                    </div>
                </div>
                <div className={style.information_img}>
                   <img width={'100%'} src="https://png.pngtree.com/png-vector/20200622/ourmid/pngtree-carrot-cute-character-logo-icon-png-image_2260896.jpg" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Infomation;