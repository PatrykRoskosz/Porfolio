import React from 'react';
import Components from '../components';


const Project = () => {
    const todu = 'A mini application that allows you to add and delete tasks on the list';
    const shopingList = 'The application is designed to search for products of interest to us from the product list';
    const billSplitterText = 'File divide the bill and calculate the tip';




    return (
        <section>
            <Components.ProjectHeader />

            <section className='panel'>
                <Components.ButtonProject head='Tudu app' href='/projects/todu' text={todu}/>
                <Components.ButtonProject head='ShopingList' href='/projects/shopinglist' text={shopingList}/>
                <Components.ButtonProject head='Bill Splitter' href='/projects/billsplitter' text={billSplitterText}/>
                <Components.ButtonProject head='Form validator' href='/projects/form-validator' text={todu}/>
                <Components.ButtonProject head='Watch' href='/projects/watch' text={'watch'}/>
                <Components.ButtonProject head='Train' href='/projects/train' text={'train'}/>
                <Components.ButtonProject head='Tudu app' href='/projects/todu' text={todu}/>
                <Components.ButtonProject head='Tudu app' href='/projects/todu' text={todu}/>
                <Components.ButtonProject head='Tudu app' href='/projects/todu' text={todu}/>
            </section>
          
        </section>
        
    )
}

export default Project;