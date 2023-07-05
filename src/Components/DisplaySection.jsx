import React from 'react';

const DisplaySection = ({ triggerPreview }) => {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div className="display-section wrapper">
            <h2 className="title capitalize">new</h2>
            <p className="text capitalize">brilliant</p>
            <span className="description capitalize">
                a display that's up to 2x brighter in the sun.
            </span>
            <button className="button" onClick={triggerPreview}>
                Try Me!
            </button>
            <button className="back-button" onClick={handleScrollToTop}>
                TOP
            </button>
        </div>
    );
};

export default DisplaySection;
