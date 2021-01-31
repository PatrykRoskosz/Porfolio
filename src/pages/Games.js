import React from 'react';
import Components from '../components';

const Games = () => {
    return (
        <section>
            <Components.GameHeader />
            <section className='panel'>
                <Components.ButtonProject head='Snake' href='/games/snake' text='Snake'/>
            </section>
            
        </section>
       
    )
}

export default Games;