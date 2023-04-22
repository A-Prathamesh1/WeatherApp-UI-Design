import React from 'react';
import Classes from './Footer.module.css';

export const Footer = () => {
        return (
                <div className={Classes.background}>
                        <h1 className={Classes.weatherapp}>WeatherApp</h1>
                        <div className={Classes.links}>
                                <ul className={Classes.pages}>
                                        <li>
                                                <a href="#">Home</a>
                                        </li>
                                        <li>
                                                <a href="#">Cities</a>
                                        </li>
                                        <li>
                                                <a href="#">News</a>
                                        </li>
                                </ul>
                                <ul className={Classes.misc}>
                                        <li>
                                                <a href="#">Contact Us</a>
                                        </li>
                                        <li>
                                                <a href="#">FAQs</a>
                                        </li>
                                </ul>
                        </div>
                </div>
        );
};
