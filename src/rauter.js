import React from 'react';
import pages from './pages';


const {
    Home,
    Contact,
    Games,
    Project
} = pages;


const routes = {
    "/": () => <Home />,
    "/contact": () => <Contact />,
    "/games": () => <Games />,
    "/projects": () => <Project />
}

export default routes;