import React from 'react';
import Components from '../components';

const Project = () => {
    const todu = 'A mini application that allows you to add and delete tasks on the list';




    return (
        <section>
            <Components.ProjectHeader />

            <section className='panel'>
                <Components.ButtonProject head='Tudu app' href='/projects/todu' text={todu}/>
                <Components.ButtonProject head='Tudu app' href='/projects/todu' text={todu}/>
                <Components.ButtonProject head='Tudu app' href='/projects/todu' text={todu}/>
                <Components.ButtonProject head='Tudu app' href='/projects/todu' text={todu}/>
                <Components.ButtonProject head='Tudu app' href='/projects/todu' text={todu}/>
                <Components.ButtonProject head='Tudu app' href='/projects/todu' text={todu}/>
                <Components.ButtonProject head='Tudu app' href='/projects/todu' text={todu}/>
                <Components.ButtonProject head='Tudu app' href='/projects/todu' text={todu}/>
                <Components.ButtonProject head='Tudu app' href='/projects/todu' text={todu}/>
            </section>
          
        </section>
        
    )
}

export default Project;