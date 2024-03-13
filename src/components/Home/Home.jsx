import React from 'react';
import './Home.scss'
import bgImage2 from './../../img/bgImage2.jpg'
import {Link} from "react-router-dom";
import {ROUTES} from "../utils/routes";


const Home = () => {
    return (
        <div className='home'>
            <div className="mainContentHome">
                <h1>Информационные системы и технологии <br/>
                    Лабораторная работа №2</h1>
                <div className="navLine">
                    <img className='backgroundImage' src={bgImage2} alt="bgImage2"/>
                </div>
                <div className="btns">
                    <button className='firstBtn'>
                        <Link to={ROUTES.TASK1} >
                            <p>Task 1</p>
                        </Link>
                    </button>
                    <button className='secondBtn'>
                        <Link to={ROUTES.TASK2}>
                            <p>Task 2</p>
                        </Link>

                    </button>
                    <button className='thirdBtn'>
                        <Link to={ROUTES.TASK3}>
                            <p>Task 3</p>
                        </Link>

                    </button>
                    <button className='fourthBtn'>
                        <Link to={ROUTES.TASK4}>
                            <p>Task 4</p>
                        </Link>

                    </button>
                </div>

            </div>
        </div>
    );
};

export default Home;