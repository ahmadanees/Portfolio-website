import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/ahmad.jpg';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={["Hi, I'm Ahmad Anees", "I'm a Software Developer"]} speed={100} eraseDelay={700}/>
            
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    