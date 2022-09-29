import React, { useEffect, useState } from 'react';
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
                <h1>i am from cart</h1>
            </div>
        </div>
    );
};

export default Home;