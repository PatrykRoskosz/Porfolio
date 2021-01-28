import React from 'react';
import pages from './pages';


const {
    Home,
    Contact,
    Games,
    Project,
    Todu
} = pages;


const routes = {
    "/": () => <Home />,
    "/contact": () => <Contact />,
    "/games": () => <Games />,
    "/projects": () => <Project />,
    "/projects/todu": () => <Todu />
}

export default routes;