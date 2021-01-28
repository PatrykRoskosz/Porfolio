import React ,{ useState }from 'react';
import Component from '../components';
import '../css/Todu.css';

const tasks = [];

const Todu = () => {
    const [inputText, setInputText] = useState('');
    const [countTask, setCountTask] = useState(0);
    const handleInputText = e => setInputText(preventValue => preventValue = e.target.value)

    const handeleAddToTasks = () => {
        if(inputText !== ''){
            const toduInput = document.querySelector('.toduInput');
        tasks.push({text: inputText, id: countTask});
        setCountTask(preventValue => preventValue + 1);
       setInputText('');
        toduInput.value = ''; 
        } 
    }

    const handleReadyTask = (e) => {
        const element = e.target.id;
        tasks.forEach((el, index) =>{
            if (parseFloat(element)  === index) {
                tasks.splice(index, 1)
                setCountTask(preventValue => preventValue - 1);
            }
        })
    }
    const handleEditTask = (e) => {
       
    }
  
   
        const task = tasks.map((el,index) => <Component.TaskElement key={index} id={index} text={el.text} edit={handleEditTask} ready={handleReadyTask } />)
    
    return (
        <section className='toduSection'>
         <Component.BackButton href='/projects'/>
         <h1>TODU application</h1>
         <div className='toduPanel'>
             <input type="text" placeholder='Write an assignment' className='toduInput' onChange={handleInputText}/><button className='toduButton' onClick={handeleAddToTasks}>ADD</button>
         </div>
         <div className='toduList'>
             {countTask > 0 ? <h2 className='toduH2'>You have {countTask} tasks to do</h2> : <h2 className='toduH2'>There are no tasks in the list</h2>}
            <ol>
                {task}
            </ol>
         </div>
        </section>
        
    )
}

export default Todu;