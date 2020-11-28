import React, { Component } from 'react'
import Social from '../components/Social';

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'myskills':['Java','JavaScript','HTML','CSS','React.js','Firebase','MATLAB', "R"]
        };
    }

    render() {
        return (
            <div className="condiv skills">
            <h1 className="subtopic">My Skills</h1>
            <ul>
            {this.state.myskills.map((value)=>{
                return <li>{value}</li>
            })}
            </ul>
            <div className = "condiv home"><Social></Social></div>
            </div>
            )
        }
    }
    
    export default Skills
    