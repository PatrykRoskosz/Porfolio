import React from 'react';
import Components from '../components';
import '../css/Train.css';

const Train = () => {
    return (
        <section className='trainBody'>
             <Components.BackButton href='/projects'/>
            <div className='container'>
            <div className="topContainer">
                    <div className='moun'></div>
                    <div className='star posA'>*</div>
                    <div className='star posB'>*</div>
                    <div className='star posC'>*</div>
                    <div className='star posD'>*</div>
                    <div className='star posE'>*</div>
                    <div className='star posF'>*</div>
                    <div className='star posG'>*</div>
                    
                    
                    <div className='go'>
                        <div className='locomotiw'>
                        <div className="window"></div>
                        <div className='windows'></div>
                        <div className='windows'></div>
                    </div>
                    <div className='wagon'>
                        <div className="windows"></div>
                        <div className="windows"></div>
                        <div className="windows"></div>
                        </div>
                    <div className='wagon2'>
                        <div className="windows"></div>
                        <div className="windows"></div>
                        <div className="windows"></div>
                    </div>
                </div>
                    
                    <div className='mount'></div>
                    
                </div>
                <div className='bootomContainer'>
                    <div className="bridge"></div>
                    <div className='rotate'></div>
                    <div className='rotate'></div>
                    <div className='rotate'></div>
                    
                </div>
            </div>  
        </section>
    )
}

export default Train;



