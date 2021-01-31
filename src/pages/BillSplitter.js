import React, { useState } from 'react';
import Components from '../components';
import '../css/BillSplitter.css';

const BillSplitter = () => {
    const [inpPrice, setInpPrice] = useState(0);
    const [inpPeople, setInpPeople] = useState(0);
    const [selectValue, setSelectValue] = useState(0);
    const [toPay, setToPay] = useState(0);
    const [showPrice, setShowPrice] = useState(false)
    const [err, setErr] = useState(false);
    



    const handleInpPriceValue = e => {
        setInpPrice(preV => preV = e.target.value);
        setErr(preV => preV = false);
        setShowPrice(preV => preV = false);
    }
    const handleInpPeopleValue = e => {
        setInpPeople(preV => preV = e.target.value);
        setErr(preV => preV = false);
        setShowPrice(preV => preV = false);
    }
    const handleChangeSelectValue = e => setSelectValue(preV => preV = e.target.value);
    const handleCalculateClick = () => {
        if(inpPrice > 0 && inpPeople > 0) {
            const price = document.querySelector('#price');
            const people = document.querySelector('#people');
           setToPay(preV => preV = ((inpPrice / inpPeople) + ((inpPrice * parseFloat(selectValue)) / inpPeople)).toFixed(2) ); 
           setShowPrice(preV => preV = true);
           price.value = '';
           people.value = '';
           setInpPrice(preV => preV = 0);
           setInpPeople(preV => preV = 0);
        } else {
            setErr(preV => preV = true);
        } 
        
    }

    console.log(toPay);


    


    return (
        <section className='billSpliterBody'>
            <Components.BackButton href='/projects' />

            <div className='billSpliterWrapper'>
                <div className='billSplitterTop'>
                    <h1>BillSpliter</h1>
                    <p>Share the bill with your friends</p>
                </div>
                <div className='billSplitterBottom'>
                    <label htmlFor="price">Amount to pay:</label>
                    <input type="number" id='price'  onChange={handleInpPriceValue}/>

                    <label htmlFor="people">Number of people:</label>
                    <input type="number" id='people' onChange={handleInpPeopleValue}/>

                    <label htmlFor="tip">Tip:</label>
                    <select id="tip" defaultValue='0' onChange={handleChangeSelectValue}>
                    <option value="0"  disabled> -- Choose a tip -- </option>
                        <option value="0.05">5%</option>
                        <option value="0.1">10%</option>
                        <option value="0.15">15%</option>
                        <option value="0.2">20%</option>
                    </select>

                    <button className='calculateBtn' onClick={handleCalculateClick}>Calculate</button>
                    {err ?<p className='billErr'>You must fill in the price and people fields</p>: null}
                    {showPrice? <p className="billInfo">Must be paid <span>{toPay} zł</span> per person. </p>: null}
                    

                </div>
            </div>
            
        </section>
       
    );
};

export default BillSplitter;