import React, { useEffect, useState } from 'react';
import Classes from './Cities.module.css';
import { FaSearch } from 'react-icons/fa';
import { City } from './City';

const activeClass = (temp) => {
        switch (temp) {
                case temp < 25:
                        return 'thunder';
                case temp < 30 && temp > 25:
                        return 'cloudy';
                case temp > 30:
                        return 'sunny';
                default:
                        return 'sunny';
        }
};
export const Cities = () => {
        const API_KEY = process.env.REACT_APP_API_KEY;
        let cities = ['Delhi', 'Chennai', 'Jaipur'];

        const [results, setResults] = useState([]);

        let result = [];

        useEffect(() => {
                const fetchDetails = async () => {
                        for (const city of cities) {
                                const response = await fetch(
                                        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
                                );
                                const jsonData = await response.json();
                                result.push(jsonData);
                        }
                        console.log(result);
                        setResults(result);
                };
                fetchDetails();
                return () => {
                        console.log('cleanup');
                        setResults([]);
                };
        }, []);

        return (
                <div className={Classes.background}>
                        <h1 className={Classes.cities}>Cities</h1>
                        <div className={Classes.cards}>
                                {results.map((city) => {
                                        return (
                                                <City
                                                        Class1={
                                                                'item ' +
                                                                activeClass(
                                                                        city
                                                                                .main
                                                                                .temp -
                                                                                273.15
                                                                )
                                                        }
                                                        title={activeClass(
                                                                city.main.temp -
                                                                        273.15
                                                        )}
                                                        temp={city.main.temp}
                                                        city={city.name}
                                                        date={
                                                                new Date()
                                                                        .toLocaleString()
                                                                        .split(
                                                                                ' '
                                                                        )[0]
                                                        }
                                                        key={city.name}
                                                />
                                        );
                                })}
                        </div>
                        <div className={Classes.search}>
                                <input
                                        className={Classes.searchbar}
                                        placeholder="Search Location"
                                />
                                <button type="submit" className={Classes.sb}>
                                        <FaSearch />
                                </button>
                        </div>
                </div>
        );
};
