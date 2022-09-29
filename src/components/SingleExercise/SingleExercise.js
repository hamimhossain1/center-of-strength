import React from 'react';
import './SingleExercise.css';

const SingleExercise = ({exercise}) => {
    console.log(exercise)
    const {name, description, picture, time, age } = exercise;
    return (
        <div className='single-exercise'>
            <h1>Name: {name}</h1>
            <img src={picture} alt="" />
        </div>
    );
};

export default SingleExercise;