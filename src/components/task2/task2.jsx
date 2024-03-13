import React from 'react';
import './task2.scss';
import image_bg from './../../img/img_bg.jpg'

const Task2 = () => {
    return (
        <div className="web-page">
            <h1>Заголовок страницы</h1>

            <h2>Подзаголовок</h2>

            <p>Это текст абзаца.</p>

            <p><strong>Выделенный текст</strong></p>

            <p>Еще один абзац текста.</p>

            <hr />

            <h3>Списки</h3>

            <ol>
                <li>Первый пункт нумерованного списка</li>
                <li>Второй пункт нумерованного списка</li>
                <li>Третий пункт нумерованного списка</li>
            </ol>

            <ul type='circle'>
                <li >Первый пункт маркированного списка</li>
                <li>Второй пункт маркированного списка</li>
                <li>Третий пункт маркированного списка</li>
            </ul>

            <h3>Изображение</h3>

            <img src={image_bg} alt="Изображение" />

            <h3>Аудио</h3>

            <audio controls>
                <source src="audio.mp3" type="audio/mpeg" />
                {/*Your browser does not support the audio element.*/}
            </audio>

            <h3>Видео</h3>

            <video controls>
                <source src="video.mp4" type="video/mp4" />
                {/*Your browser does not support the video element.*/}
            </video>
        </div>
    );
};

export default Task2;
