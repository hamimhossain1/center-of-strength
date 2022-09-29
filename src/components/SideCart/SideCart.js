import React from 'react';
import './SideCart.css';
import img1 from '../../images/person.png'

const SideCart = () => {
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
                    <button>20s</button>
                    <button>10s</button>
                    <button>30s</button>
                    <button>40s</button>
                    <button>20s</button>
                </div>
            </div>
        </div>
    );
};

export default SideCart;