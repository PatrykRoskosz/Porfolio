import React, {Component} from 'react';
import Components from '../components';
import '../css/Watch.css';

class Watch extends Component {
    state = {
        seconds: 0,
        minutes: 0,
        houers: 0
    }

    componentDidMount= () => {
        setInterval(this.setClock, 1000);
    }

    // (date.getSeconds() + date.getMinutes() * 60 + (date.getHours() * 3600)) / 360 + 19

    setClock = () => {
        const date = new Date();
        const seconds = date.getSeconds() * 6;
        const minutes = date.getMinutes() * 6 ;
        const houers =(date.getMinutes() / 2) + date.getHours() * 30;
        console.log(houers);
        this.setState({
            seconds,
            minutes,
            houers
        })
    }
   

    render () {
        return (
            <section className='timer'>
                <Components.BackButton href='/projects'/>
                <div className="clock">
                    <div className="hand minute" style={{
                        '--rotation': this.state.minutes
                    }} date-minute-hand></div>
                    <div className="hand seconds" style={{
                        '--rotation': this.state.seconds
                    }} date-seconds-hand></div>
                    <div className="hand hour"  style={{
                        '--rotation': this.state.houers
                    }} date-hour-hand></div>
                    <div className="number number1">|</div>
                    <div className="number number2">|</div>
                    <div className="number number3">|</div>
                    <div className="number number4">|</div>
                    <div className="number number5">|</div>
                    <div className="number number6">|</div>
                    <div className="number number7">|</div>
                    <div className="number number8">|</div>
                    <div className="number number9">|</div>
                    <div className="number number10">|</div>
                    <div className="number number11">|</div>
                    <div className="number number12">|</div>
                </div>
            </section>
           
        )
    }
}   

export default Watch;