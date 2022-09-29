import React, { useEffect, useState } from 'react';
import QuestionsAnswer from '../QuestionsAnswer/QuestionsAnswer';
import SideCart from '../SideCart/SideCart';
import SingleExercise from '../SingleExercise/SingleExercise';
import './Home.css';

const Home = () => {
    const [exercises, setExercises] = useState([]);
    const [exerciseTime, setExerciseTime] = useState(0);

    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    },[])
    
    const addToList = (exercises)=>{
        // console.log(exercises)
        const newTime = exerciseTime + exercises.time;
        console.log(newTime)
        setExerciseTime(newTime)   
    }

    return (
        <div>
            <div className='main-container'>
                <div className="cards-section">
                    {
                        exercises.map(exercise => <SingleExercise
                        key={exercise.id}
                        exercise={exercise}
                        exerciseTime={exerciseTime}
                        setExerciseTime={setExerciseTime}
                        addToList={addToList}

                        ></SingleExercise>)
                    }
                </div>
                <div className="cart-section">
                    <SideCart exerciseTime={exerciseTime}></SideCart>
                    
                </div>
            </div>
            <div className='questions-answer'>
                <QuestionsAnswer></QuestionsAnswer>
            </div>
        </div>
    );
};

export default Home;