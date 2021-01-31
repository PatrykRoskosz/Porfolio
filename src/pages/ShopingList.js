import React, { useState } from 'react';
import Components from '../components';
import '../css/ShopingList.css';



const ShopingList = () => {
    const [search, setSearch] = useState('');
    const liList = document.querySelectorAll('.shopList li');

    const handleSearchInput = e => {
        const eValue = e.target.value.toLocaleLowerCase();  
        setSearch(prev => prev = eValue );
        
    }

    liList.forEach(li => {
            if(  li.textContent.toLocaleLowerCase().indexOf(search)!== -1) {
                li.style.display = 'block';
            } else {
                li.style.display = 'none';
            }
        });


    return (
        <section className='shopingListSection'>
            <Components.BackButton href='/projects'/>
            <div className='searchListWrap'>
                <div className='searchHeader'>
                    <div className='shadow'></div>
                    <h1>ShopSearch</h1>
                    <input type="text" className='search'
                    placeholder='Write what you need' onChange={handleSearchInput} />
                </div>
                <div className="shopList">
                    <h2>List of available products:</h2>
                    <ul>
                        <li>Milk</li>
                        <li>Chocolate</li>
                        <li>Bread</li>
                        <li>Rolls</li>
                        <li>Banana Juice</li>
                        <li>Baguettes</li>
                        <li>Beef</li>
                        <li>Apple Juice</li>
                        <li>Pork</li>
                        <li>Chicken</li>
                        <li>Orange juice</li>
                        <li>Water</li>
                        <li>Whiskey</li>
                        <li>Vodka</li>
                        <li>Tomato Juice</li>
                        <li>Pepper</li>
                        <li>Potatoes</li>
                        <li>Honey</li>
                        <li>Chipsr</li>
                        <li>Spices</li>
                        <li>Pizza</li>   
                    </ul>
                </div>
            </div>
        </section>
       
    );
    
};

export default ShopingList;