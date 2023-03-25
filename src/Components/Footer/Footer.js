import React from 'react';
import Classes from './Footer.module.css';

export const Footer = () => {
        return (
                <div className={Classes.background}>
                        <h1 className={Classes.weatherapp}>WeatherApp</h1>
                        <div className={Classes.links}>
                                <ul className={Classes.pages}>
                                        <li>Home</li>
                                        <li>Cities</li>
                                        <li>News</li>
                                </ul>
                                <div className={Classes.misc}>
                                        <a>Contact Us</a>
                                        <a>FAQs</a>
                                </div>
                        </div>
                </div>
        );
};
