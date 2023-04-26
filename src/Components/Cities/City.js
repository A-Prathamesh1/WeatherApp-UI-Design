import React from 'react';
// import Classes from './Cities.module.css';
import './City.css';

export const City = ({ temp, city, date, title, Class1 }) => {
        
        console.log(Class1,title);
        return (
                <div className={`${Class1}`}>
                        <h1 className="thundertitle">{title}</h1>
                        <div className="tempcard">
                                <h1 className="tempreturedeg">
                                        {(temp - 273.15).toFixed(0)}&deg;
                                </h1>
                                <div>
                                        <h2>{city}</h2>
                                        <h3>{date}</h3>
                                </div>
                        </div>
                </div>
        );
};
