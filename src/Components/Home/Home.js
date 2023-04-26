import React, { useEffect, useState } from 'react';
import Classes from './Home.module.css';
import { FaSun } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export const Home = () => {
        const API_KEY = 'f63cb451e699e81b8c81a6abcd88cd2c';
        const URL = `http://api.openweathermap.org/data/2.5/weather?q=Pune&appid=${API_KEY}`;

        let date1 = new Date();
        const [city, setCity] = useState('Pune');
        const [date, setDate] = useState(date1.toGMTString());
        const [clouds, setClouds] = useState(null);
        const [humidity, setHumidity] = useState(null);
        const [wind, setWind] = useState(null);
        const [temperature, setTemperature] = useState(null);

        useEffect(() => {
                const fetchWeatherDetails = async () => {
                        await fetch(URL)
                                .then((response) => response.json())
                                .then((data) => {
                                        console.log('this ' + data);
                                        setCity(data.name);
                                        // setDate(
                                        //         data.list[0].dt_txt.split(
                                        //                 ' '
                                        //         )[0]
                                        // );
                                        setClouds(data.clouds.all);
                                        setHumidity(data.main.humidity);
                                        setWind(data.wind.speed);
                                        setTemperature(data.main.temp);
                                });
                };
                fetchWeatherDetails();
        }, [URL]);

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
                                                <h5>Clouds</h5>
                                                <h5>{clouds}</h5>
                                        </div>
                                        <div className={Classes.horizantal}>
                                                <h5>Humidity</h5>
                                                <h5>{humidity}%</h5>
                                        </div>
                                        <div className={Classes.horizantal}>
                                                <h5>Wind</h5>
                                                <h5>{wind}Km/h</h5>
                                        </div>
                                </div>
                        </div>
                        <div className={Classes.widget}>
                                <p className={Classes.tempreture}>
                                        {(temperature - 273.15).toFixed(0)}&deg;
                                </p>
                                <div>
                                        <p className={Classes.city}>{city}</p>
                                        <p className={Classes.coll}>
                                                {/* 06:45&nbsp;Thursday&nbsp; */}
                                                {date}&nbsp;
                                                {/* <div className={Classes.sun}> */}
                                                <FaSun />
                                                {/* </div> */}
                                        </p>
                                </div>
                        </div>
                </div>
        );
};
