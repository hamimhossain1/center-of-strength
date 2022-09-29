import React, { useEffect, useState } from 'react';
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
            {/* <h2 className='title'>Select today's exercise</h2> */}
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
        </div>
    );
};

export default Home;