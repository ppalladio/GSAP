import React from 'react';
import Logo from '../assets/images/logo.svg';
import { BsApple } from 'react-icons/bs';
const Nav = () => {
    return (
        <nav className="nav-wrapper">
            <div className="nav-content">
                <ul className="list-styled flex flex-row justify-between">
                    <li>
                        <BsApple className="link-styled" size={15} />
                    </li>
                    <li className=' '>
                        <a href="/" className="link-styled no-underline">
                            Store
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
