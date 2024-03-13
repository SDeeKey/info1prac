import React from 'react';
import './task3.scss'
import image1 from './../../img/img_bg.jpg'
import image2 from './../../img/img_bg1.jpg'
import image3 from './../../img/img_bg2.jpg'

const Task3 = () => {
    return (
        <div className='task3'>
            <div className="mainContent">
                <a href='#img_bg'>Первая картинка</a>
                <a href='#img_bg1'>Первая картинка</a>
                <a href='#img_bg2'>Первая картинка</a>
                <img id='img_bg' src={image1} alt="image1"/>
                <img id='img_bg1'  src={image2} alt="image2"/>
                <img id='img_bg2' src={image3} alt="image3"/>
            </div>
        </div>
    );
};

export default Task3;