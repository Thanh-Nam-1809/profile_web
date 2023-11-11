import React from 'react';
import style from '../../styles/index.module.scss'
const LetTask = () => {
    return (
        <section className={style.section}>
            <div className={style.container_let_task}>
                <div className={style.let_task_title}>
                    <p>Want to start a project?</p>
                    <h1>Let’s Talk</h1>
                </div>
                <div className={style.let_task_button}>
                    <button>CONTACT ME</button>
                </div>
            </div>
        </section>
    );
};

export default LetTask;