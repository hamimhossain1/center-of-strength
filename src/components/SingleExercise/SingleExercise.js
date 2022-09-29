import React from 'react';
import './SingleExercise.css';

const SingleExercise = ({exercise}) => {
    console.log(exercise)
    const {name, description, picture, time, age } = exercise;
    return (
        <div>
            <h1>Name: {name}</h1>
        </div>
    );
};

export default SingleExercise;