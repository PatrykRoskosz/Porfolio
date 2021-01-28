import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from "antd";
import "antd/dist/antd.css";
import { useRoutes } from "hookrouter";
import routes from './rauter';
import Components from './components';
import './css/mine.css';

const {Header, Footer, Content } = Layout;




const App =() => {
    const routeResult = useRoutes(routes);

    return (
        <Layout className="App">
            <Header className='header'>
                <Components.Navi />
            </Header>
            <Content className='content'>
                {routeResult}
            </Content>
            <Footer></Footer>

        </Layout>
    );
};



const rootElement = document.getElementById("root");

ReactDOM.render(<App/>, rootElement);