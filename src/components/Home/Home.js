import React, { useEffect, useState } from 'react';
import QuestionsAnswer from '../QuestionsAnswer/QuestionsAnswer';
import SideCart from '../SideCart/SideCart';
import SingleExercise from '../SingleExercise/SingleExercise';
import './Home.css';

const Home = () => {
    const [exercises, setExercises] = useState([]);

    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    },[])
    // console.log(exercise)

    return (
        <div>
            <div className='main-container'>
                <div className="cards-section">
                    {
                        exercises.map(exercise => <SingleExercise
                        key={exercise.id}
                        exercise={exercise}
                        ></SingleExercise>)
                    }
                </div>
                <div className="cart-section">
                    <SideCart></SideCart>
                    
                </div>
            </div>
            <div className='questions-answer'>
                <QuestionsAnswer></QuestionsAnswer>
            </div>
        </div>
    );
};

export default Home;