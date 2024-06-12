import React from 'react';
import "../css/Marquee.css";

const Marquee = ({ text }) => {
    return (
        <div className="marquee-container">
            <div className="marquee">
                <span>{text}</span>
            </div>
        </div>
    );
};

export default Marquee;