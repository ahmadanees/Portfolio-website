import React, { Component } from 'react';
import Social from '../components/Social';


class About extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">About Me</h1>
            <h4>Hey there,</h4>
            <h1>I'm Ahmad Anees</h1>
            <h3>Software <u>Developer</u> | Applied <u>Mathematician</u></h3>
            <br></br>
            <p>Back in the day when smartphones first started taking over, they weren’t as snappy as we expect them to be today. I remember when I got a small android phone from Sony. I was obsessed with the OS immediately but was frustrated with the performance and noticing areas where the UX was lacking. I learnt to root for superuser access to system level directories. I could then flash customs ROMs and kernels to tune the UI and performance to my liking. I believe this is when my unquenchable appreciation for technology started. Now, I am graduating with a B.S. in Applied Math and Computer Science and on my way to to enter the industry head first. 
            </p>
            <div className = "condiv home">
                <Social />
                </div>
            </div>
            )
        }
    }
    
export default About
    