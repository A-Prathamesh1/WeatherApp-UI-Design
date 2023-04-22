import React from 'react';
import Classes from './Home.module.css';
import { FaSun } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export const Home = () => {
        return (
                <div className={Classes.background}>
                        <div className={Classes.navbar}>
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/cities">Cities</NavLink>
                                <NavLink to="/news">News</NavLink>
                        </div>
                        <div className={Classes.weatherdetails}>
                                <h4 className={Classes.details}>
                                        Weather Details
                                </h4>
                                <div className={Classes.list}>
                                        <div className={Classes.horizantal}>
                                                <h5>Cloudy</h5>
                                                <h5>10%</h5>
                                        </div>
                                        <div className={Classes.horizantal}>
                                                <h5>Humidity</h5>
                                                <h5>62%</h5>
                                        </div>
                                        <div className={Classes.horizantal}>
                                                <h5>Wind</h5>
                                                <h5>8km/hr</h5>
                                        </div>
                                </div>
                        </div>
                        <div className={Classes.widget}>
                                <p className={Classes.tempreture}>32&deg;</p>
                                <div>
                                        <p className={Classes.mumbai}>Mumbai</p>
                                        <p className={Classes.coll}>
                                                06:45&nbsp;Thursday&nbsp;
                                                09/03/23&nbsp;
                                                {/* <div className={Classes.sun}> */}
                                                <FaSun />
                                                {/* </div> */}
                                        </p>
                                </div>
                        </div>
                </div>
        );
};
