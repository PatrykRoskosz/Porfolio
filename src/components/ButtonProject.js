import React from 'react';
import { A } from "hookrouter";
import '../css/ButtonProject.css';


const ButtonProject = (props) => {
    const {head, href, text} = props
    return (
        <div className='projectPanel'>
            <div className='headPanel'>
                <h2>{head}</h2>
            </div>
            <div className='bodyPanel'>
                <p>{text}</p>
                <A href={href} className='buttonPanel'>Open</A>
            </div>
        </div>
    )
}

export default ButtonProject;