import React from 'react';
import '../css/TaskElement.css';


const TaskElement = (props) => {
    const { text, edit, ready, id } = props;
    return (
        <li className='taskElement'>
            <div className='taskTextWrap'>
                <p className='taskText'>{text}</p>
            </div> 
            <div className='taskButtonWrap'>   
                <button className='ready taskButton' id={id} onClick={ready}>Ready</button>
                <button className='edit taskButton' id={id} onClick={edit}>Edit</button>
            </div>
        </li>
    );
};

export default TaskElement;

