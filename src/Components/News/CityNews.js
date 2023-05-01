import React from 'react';
import Classes from './News.module.css';

export const CityNews = ({ news, city }) => {
        return (
                <div className={`${Classes.item} ${Classes.item1}`}>
                        <p className={Classes.city}>
                                {news.charAt(0).toUpperCase() + news.slice(1)}{' '}
                                in {city}
                        </p>
                        <div className={Classes.overlay}>
                                <button className={Classes.text}>
                                        Read More
                                </button>
                        </div>
                </div>
        );
};
