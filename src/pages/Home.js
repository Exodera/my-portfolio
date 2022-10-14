import React from "react";
import {AiFillGithub} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillMail} from "react-icons/ai"
import "./styles/Home.css"


const Home = ()=>{
    return (   
    <div className="home">
        <div className="about">
            <h2>Hi there, My name is Oratile</h2>
            <p>
                I am an aspiring website developer that 
                loves learning and creating suiii
            </p>
            <div className="social-icons">
                <AiFillGithub/>
                <AiFillLinkedin/>
                <AiFillMail/>
            </div>
         
        </div>
        <div className="skills">
            <h1>Skills</h1>
            <ol className="list">
                <li className="item">
                    <h2>Front-End</h2>
                    <span>ReactJS, HTML, CSS, Figma</span>
                </li>
                <li className="item">
                    <h2>Languages</h2>
                    <span>JavaScript, C#, Dart</span>          
                </li>
            </ol>

        </div>
    </div>
    )
 
}

export default Home