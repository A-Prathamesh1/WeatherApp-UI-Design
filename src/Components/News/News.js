import React from 'react';
import Classes from './News.module.css';

export const News = () => {
        return (
                <div className={Classes.background}>
                        <div className={Classes.news}>News</div>
                        <div className={Classes.items}>
                                <div
                                        className={`${Classes.item} ${Classes.item1}`}
                                >
                                        <p className={Classes.delhi}>
                                                Thunder Strikes Delhi
                                        </p>
                                </div>
                                <div
                                        className={`${Classes.item}  ${Classes.item2}`}
                                >
                                        <p className={Classes.manipur}>
                                                Cloudstorms in Manipur
                                        </p>
                                </div>
                                <div
                                        className={`${Classes.item}  ${Classes.item3}`}
                                >
                                        <p className={Classes.mumbai}>
                                                It's Summer in Mumbai
                                        </p>
                                </div>
                        </div>
                </div>
        );
};
