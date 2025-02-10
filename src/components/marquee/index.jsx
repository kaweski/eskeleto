import React from 'react';
import './style.scss';

const Marquee = ({text}) => {
    return (
        <div className="marquee">
            <section className="section ticker">
                <div className="ticker__wrap">
                    <div className="ticker__content">
                        {Array(10).fill(null).map((_, index) => (
                            <div key={index} className="ticker__logo logo">{text}</div>
                        ))}
                    </div>
                    <div className="ticker__content">
                        {Array(10).fill(null).map((_, index) => (
                            <div key={index} className="ticker__logo logo">{text}</div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Marquee;