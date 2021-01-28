import React from 'react';
import { A } from "hookrouter";
import '../css/BackButton.css';

const BackButton = (props) => {
    const {href} = props;
    const back = '< Back'
    return (
            <A href={href} className='backButton' >{back}</A>
    )
}

export default BackButton;