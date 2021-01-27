import React from 'react';
import Components from '../components';
import '../css/Home.css'

const Home = () => {
    return (
        <section>
            <Components.Header />
            <aside className='homeSection'>
                <h1>Welcome to my portfolio</h1>

                <section>
                   <article className='cardArticle'>

                       <div className='card'>
                           <div className='cardHeader'>
                               <h2>About me</h2>
                            </div>
                            <div className='cardText'>
                                <p> Hi, my name is Patryk and from 2021.01.24 </p>
                                <p>I am a certified frond end developerm.</p>
                                <p>I started my adventure with programming at the beginning of 2020</p>
                            </div>
                       </div>

                       <div className='card'>
                           <div className='cardHeader'>
                               <h2>Why frond end?</h2>
                            </div>
                            <div className='cardText'>
                                <p> I like the speed of the effect of my work </p>
                                <p> but I do not exclude the back ednd </p>
                                <p> Frond end is just the beginning of my development path </p>
                            </div>
                       </div>

                       <div className='card'>
                           <div className='cardHeader'>
                               <h2>My goals</h2>
                            </div>
                            <div className='cardText'>
                                <p> I want to develop my skills as a front end developer </p>
                                <p>learn about new tools and technologies.</p>
                                <p>but the goal he pursues in personal development is to become a Senior Full Stuck Developer</p>
                            </div>
                       </div>
                   </article>
                </section>


            </aside>
        </section>
        
    )
}

export default Home;