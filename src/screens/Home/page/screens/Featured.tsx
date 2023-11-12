import React from 'react';
import IconEllipse from '../../../../assets/svg/IconEllipse';
import style from '../../styles/index.module.scss'
import IconReact from '../../../../assets/svg/IconReact';
import IconHtml from '../../../../assets/svg/IconHtml';
import IconCss from '../../../../assets/svg/IconCss';
import IconLaravel from '../../../../assets/svg/IconLaravel';
import IconNodeJs from '../../../../assets/svg/IconNodeJs';

const Featured = () => {

    return (
        <div style={{ width: '100%' }}>
            <div className={style.container_featured}>
                <div className={style.run}>
                    <p>New Featured Work</p>
                    <IconEllipse />
                </div>
                <div className={style.run}>
                    <p>New Featured Work</p>
                    <IconEllipse />
                </div>
                <div className={style.run}>
                    <p>New Featured Work</p>
                    <IconEllipse />
                </div>
            </div>
            <div className={style.container_featured}>
                <div className={style.run_logo}>
                    <IconReact />
                </div>
                <div className={style.run_logo}>
                    <IconHtml />
                </div>
                <div className={style.run_logo}>
                    <IconCss />
                </div>
                <div className={style.run_logo}>
                    <IconLaravel />
                </div>
                <div className={style.run_logo}>
                    <IconNodeJs />
                </div>
            </div>
        </div>
    );
};

export default Featured;