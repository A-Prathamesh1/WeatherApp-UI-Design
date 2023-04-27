import React, { useEffect, useState } from 'react';
import Classes from './News.module.css';
import { CityNews } from './CityNews';

export const News = () => {
        const cities = ['Delhi', 'Chennai', 'Mumbai'];
        const API_KEY = process.env.REACT_APP_API_KEY;
        let result = [];
        const [results, setResults] = useState([]);
        const fetchNews = async () => {
                for (const city of cities) {
                        const response = await fetch(
                                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
                        );
                        const jsonData = await response.json();
                        result.push(jsonData);
                }
                setResults(result);
        };
        useEffect(() => {
                fetchNews();
                return () => {
                        setResults([]);
                        // result = [];
                };
        }, []);

        return (
                <div className={Classes.background}>
                        <div className={Classes.news}>News</div>
                        <div className={Classes.items}>
                                {results.map((city) => (
                                        <CityNews
                                                news={
                                                        city.weather[0]
                                                                .description
                                                }
                                                city={city.name}
                                                key={city.name}
                                        />
                                ))}
                        </div>
                </div>
        );
};
