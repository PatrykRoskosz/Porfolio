import React from 'react';
import { A } from "hookrouter";
import '../css/Navi.css'

const Navi = () => {
    return (
        <div className='header-container'>
            <A href='/' className='link'>
                Home
            </A>
            <A href='/projects' className='link'>
                Projects
            </A>
            <A href='/contact' className='link'>
                Contact
            </A>
            <A href='/games' className='link'>
                Games
            </A>
        </div>
    );
};

export default Navi;