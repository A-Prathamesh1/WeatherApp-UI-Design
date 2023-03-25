import React from 'react';
import Classes from './Cities.module.css';
import { FaSearch } from 'react-icons/fa';

export const Cities = () => {
        return (
                <div className={Classes.background}>
                        <h1 className={Classes.cities}>Cities</h1>
                        <div className={Classes.cards}>
                                <div
                                        className={`${Classes.item} ${Classes.thunder}`}
                                >
                                        <h1 className={Classes.thundertitle}>
                                                Thunder
                                        </h1>
                                        <div className={Classes.tempcard}>
                                                <h1
                                                        className={
                                                                Classes.tempreturedeg
                                                        }
                                                >
                                                        24&deg;
                                                </h1>
                                                <div>
                                                        <h2>Delhi</h2>
                                                        <h3>09/03/2023</h3>
                                                </div>
                                        </div>
                                </div>
                                <div
                                        className={`${Classes.item} ${Classes.cloudy}`}
                                >
                                        <h1 className={Classes.cloudytitle}>
                                                Cloudy
                                        </h1>
                                        <div className={Classes.tempcard}>
                                                <h1
                                                        className={
                                                                Classes.tempreturedeg
                                                        }
                                                >
                                                        29&deg;
                                                </h1>
                                                <div>
                                                        <h2>Chennai</h2>
                                                        <h3>09/03/2023</h3>
                                                </div>
                                        </div>
                                </div>
                                <div
                                        className={`${Classes.item} ${Classes.sunny}`}
                                >
                                        <h1 className={Classes.sunnytitle}>
                                                Sunny
                                        </h1>
                                        <div className={Classes.tempcard}>
                                                <h1
                                                        className={
                                                                Classes.tempreturedeg
                                                        }
                                                >
                                                        40&deg;
                                                </h1>
                                                <div>
                                                        <h2>Jaipur</h2>
                                                        <h3>09/03/2023</h3>
                                                </div>
                                        </div>
                                </div>
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
