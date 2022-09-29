import React from 'react';
import './SingleExercise.css';

const SingleExercise = ({exercise}) => {
    console.log(exercise)
    const {name, description, picture, time, age } = exercise;
    return (
        <div className='single-exercise'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p><small>{description}</small></p>
            <h5>Suitable age: {age}</h5>
            <h5>Time required: {time}</h5>
            <div>
                <button className='card-btn'>Add to List</button>
            </div>
        </div>
    );
};

export default SingleExercise;