import React from 'react';
import './AddABreak.css';

const AddABreak = ({singleTime, addBreak}) => {
    const {breakTime} = singleTime;
    return (
        <div>
            <button onClick={()=>addBreak(singleTime)} >{breakTime}<span>s</span></button>
        </div>
    );
};

export default AddABreak;