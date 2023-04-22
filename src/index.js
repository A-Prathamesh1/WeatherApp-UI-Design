import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Cities } from './Components/Cities/Cities';
import { Earth } from './Components/Earth/Earth';
import { News } from './Components/News/News';
import App from './App';

const router = createBrowserRouter([
        { path: '/', element: <App /> },
        {
                path: '/home',
                element: <Home />,
        },
        {
                path: '/cities',
                element: <Cities />,
        },
        {
                path: '/news',
                element: <News />,
        },
        {
                path: '/earth',
                element: <Earth />,
        },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <React.StrictMode>
                <RouterProvider router={router} />
        </React.StrictMode>
);
