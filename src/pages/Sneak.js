import React from 'react';
import Components from '../components';
import '../css/Snake.css';

const Snake = () => {
    window.addEventListener('load', () => {
        let points, snake, running, apple, move, nextMove;
        const ctx = document.getElementById('snke-canvas').getContext('2d');
    
        setDefoult();
        addKeyDownEventListener();
        setInterval( renderFrame, 100);
    
        function renderFrame() {
            if (running) {
                if (nextMove.x !== -move.x || nextMove.y !== -move.y) {
                  move = nextMove;  
                }
                snake.push({x: processBund(getHead().x + move.x), y: processBund(getHead().y + move.y)});
                if (snake.filter(square => square.x === getHead().x && square.y === getHead().y).length >= 2) {
                    setDefoult();
                } else {
                    if (getHead().x === apple.x && getHead().y === apple.y ) {
                        points++;
                        apple = generateAppleLocation();
                    }
    
                  points <=0 ? snake.shift() : points--;
                }
            }
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.fillStyle = 'yellow';
            snake.forEach(square => ctx.fillRect(square.x * 20, square.y * 20, 18, 18));
           
            ctx.fillStyle = 'red';
            ctx.fillRect(apple.x *20, apple.y *20, 18, 18)
        }
    
        function getHead() {
            return snake[snake.length - 1];
        }
    
        function processBund(number) {
            if(number > 19) {
                return 0;
            } else if ( number < 0) {
                return 19
            }
            return number;
        }
    
        function setDefoult () {
            running = false;
            points = 2;
            [move, nextMove] = Array(2).fill({x: 0, y: 0});
            snake = [{x:10, y:10}];
            apple = generateAppleLocation();   
        }
    
        function generateAppleLocation() {
            let location;
            do {
                location = {x: generateRandomNumber(19), y: generateRandomNumber(19)}
            } while(snake.filter(square => square.x === location.x && square.y === location.y).length > 0 );
            return location;
    
        }
    
        function generateRandomNumber(max) {
            return Math.floor(Math.random() * (max + 1));
        }
    
        function addKeyDownEventListener() {
            window.addEventListener('keydown', e => {
                if (e.code.startsWith('Arrow')){
                    e.preventDefault();
                    running = true;
                }
                switch(e.code) {
                    case 'ArrowLeft': nextMove = {x: -1, y: 0};
                    break;
                    case 'ArrowRight': nextMove = {x: 1, y: 0};
                    break;
                    case 'ArrowDown': nextMove = {x: 0, y: 1};
                    break;
                    case 'ArrowUp': nextMove = {x: 0, y: -1};
                    break;
                }
            })
            
        }
    
    });
    return (
        <section className='snake-Game'>
             <Components.BackButton href='/games'/>
            <h1>Snake</h1>
            <form >
                <button>Start</button>
            </form>
            
            <canvas id='snke-canvas' width="400" height="400"></canvas>
        </section>
       
    )
}

export default Snake;