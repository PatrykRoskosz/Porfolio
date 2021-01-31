import React from 'react';
import pages from './pages';


const {
    BillSplitter,
    Contact,
    FormValidator,
    Games,
    Home,
    Todu,
    Train,
    Project,
    Watch,
    ShopingList,
    Snake
} = pages;


const routes = {
    "/": () => <Home />,
    "/contact": () => <Contact />,
    "/games": () => <Games />,
    "/games/snake": () => <Snake />,
    "/projects": () => <Project />,
    "/projects/todu": () => <Todu />,
    "/projects/shopinglist": () => <ShopingList />,
    "/projects/billsplitter": () => <BillSplitter />,
    "/projects/form-validator": () => <FormValidator />,
    "/projects/watch": () => <Watch />,
    "/projects/train": () => <Train />
}

export default routes;