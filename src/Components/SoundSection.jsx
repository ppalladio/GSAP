import React from 'react';

const SoundSection = () => {
    const handleDisplaySection = () => {
        const el = document.querySelector('.display-section');
        window.scrollTo({
            top: el?.getBoundingClientRect().bottom,
            left: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div className="sound-section wrapper">
            <div className="body">
                <div className="sound-section-content content">
                    <h2 className="title capitalize">new sound system</h2>
                    <p className=" text capitalize">feel the base</p>
                    <span className="description capitalize">
                        from $41.62/mo. for 24 mo. or $999 before trade-in
                    </span>

                    <ul className="links">
                        <li>
                            <button className="button">Buy</button>
                        </li>
                        <li>
                            <a className="link capitalize" onClick={handleDisplaySection}>learn more</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SoundSection;
