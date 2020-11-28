import React, { Component } from 'react';
import Social from '../components/Social';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="B.S. Applied Mathematics" where="San Jose State University | San Jose, Ca" from="Jan 2018" to="May 2021"/>
            <Widecard title="AS-T Mathematics" where="Evergreen Valley College | San Jose, Ca" from="2016" to="2018"/>
            
            <Widecard title="IGCSE" where="Aitchison College | Lahore, Pakistan" from="2005" to="2015"/>
            <div className = "condiv home"><Social></Social></div>
            </div>
            )
        }
    }
    
export default Education
    