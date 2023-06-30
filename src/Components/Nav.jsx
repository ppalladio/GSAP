import React from 'react';
import Logo from '../assets/images/logo.svg';
import { BsApple } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { PiBasket } from 'react-icons/pi';
const Nav = () => {
    return (
        <nav className="nav-wrapper">
            <div className="nav-content">
                <ul className="list-styled flex flex-row">
                    <li>
                        <BsApple className="link-styled" size={16} />
                    </li>
                    <li>
                        <a className="link-styled">Store</a>
                    </li>
                    <li>
                        <a className="link-styled">Mac</a>
                    </li>
                    <li>
                        <a className="link-styled">iPad</a>
                    </li>
                    <li>
                        <a className="link-styled">iPhone</a>
                    </li>
                    <li>
                        <a className="link-styled">Watch</a>
                    </li>
                    <li>
                        <a className="link-styled">AirPods</a>
                    </li>
                    <li>
                        <a className="link-styled">Tv & Home</a>
                    </li>
                    <li>
                        <a className="link-styled">Entertainment</a>
                    </li>
                    <li>
                        <a className="link-styled">Accessories</a>
                    </li>
                    <li>
                        <a className="link-styled">Support</a>
                    </li>
                    <li>
                        <AiOutlineSearch className="link-styled" size={16} />
                    </li>
                    <li>
                        <PiBasket className="link-styled" size={16} />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
