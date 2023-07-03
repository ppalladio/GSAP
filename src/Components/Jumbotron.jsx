import React from 'react';
import Iphone from '../assets/images/iphone-14.jpg';
import HoldingIphone from '../assets/images/iphone-hand.png';
const Jumbotron = () => {
    return (
        <div className="jumbotron-section wrapper">
            <h2 className="title">New</h2>
            <img className="logo" src={Iphone} alt="iphone 14 pro" />
            <p className="text">Big and Bigger.</p>
            <span className="description text-[30px]">
                From $41.62/mo. For 24 mo. or $999 before trade-in.
            </span>
            <ul className="links">
                <li>
                    <button className="button">Buy</button>
                </li>
                <li>
                    <a className="link">Learn more</a>
                </li>
            </ul>
            <img src={HoldingIphone} className="iphone-img" alt="iphone" />
        </div>
    );
};

export default Jumbotron;
