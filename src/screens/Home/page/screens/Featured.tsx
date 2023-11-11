import React, { useEffect, useState } from 'react';
import IconEllipse from '../../../../assets/svg/IconEllipse';
import style from '../../styles/index.module.scss'

const Featured = () => {

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const [data, setData] = useState([
        {
            id: 1,
            title: 'Featured Work',
            icon: <IconEllipse />
        }
    ]);

    useEffect(() => {
        const newData = [
            ...data,
            // {
            //   id: 1,
            //   title: 'New Item',
            //   icon: <IconEllipse /> // Thay thế bằng biểu tượng mới nếu cần
            // }
          ];
      
          setData(newData);
    }, [data])

    return (
        <div style={{ width: '100%' }}>
            <div className={style.container_featured}>
                <div className={style.run}>
                    {data.map((item) => {
                        return (
                            <>
                                <p>{item.title}</p>
                                {item.icon}
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Featured;