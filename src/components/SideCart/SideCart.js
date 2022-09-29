import React, { useEffect, useState } from 'react';
import './SideCart.css';
import img1 from '../../images/person.png'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import AddABreak from '../AddABreak/AddABreak';

const SideCart = ({exerciseTime}) => {

    const [breakTime, setBreakTime] = useState([])
    const [time, setTime] = useState(0)

    useEffect(()=>{
        fetch("dataTwo.json")
        .then(res => res.json())
        .then(data => setBreakTime(data))
    },[])

    const addBreak = (breakTime) =>{
        const newTime = breakTime.breakTime;
        setTime(newTime)

        const storeTime = localStorage.setItem('breakTime', JSON.stringify(newTime));
    }
    
    const activityCompleted = ()=>{
        toast.success("Congratulation you have done with your activity!!!", {position: "top-center"});
    }

    return (
        <div>
            <h1 className='cart-title'>Select today's Exercise</h1>
            <div className='profile-info'>
                <img className='profile-img' src={img1} alt="" />
                <div>
                <h4>Hamim Hossain</h4>
                <p><small>Dhaka, Bangladesh</small></p>
                </div>
            </div>
            <div className='person-info'>
                <div>
                    <h4>70<small>kg</small></h4>
                    <p><small>Weight</small></p>
                </div>
                <div>
                    <h4>6.5</h4>
                    <p><small>Height</small></p>
                </div>
                <div>
                    <h4>25<small>yrs</small></h4>
                    <p><small>Age</small></p>
                </div>
                
            </div>
            <div>
                <h4 className='add-break-title'>Add A Break</h4>
                <div className='add-break-options'>
                    {
                        breakTime.map(singleTime=> <AddABreak 
                            key={singleTime.id}
                            singleTime={singleTime}
                            addBreak={addBreak}
                        ></AddABreak>)
                    }
                </div>
            </div>
            <div>
                <h4 className='exercise-details'>Exercise Details</h4>
                <div className='exercise-time-div'>
                    <h5>Exercise time</h5>
                    <p ><small><span style={{color: 'white'}}>{exerciseTime} </span>seconds</small></p>
                </div>
                <div className='break-time-div'>
                    <h5>Break time</h5>
                    <p ><small><span style={{color: 'white'}}>{time}</span> seconds</small></p>
                </div>
            </div>
            <div>
                <button onClick={activityCompleted} className='activity-completed-btn'>Activity Completed</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SideCart;