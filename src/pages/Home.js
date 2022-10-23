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
                I am an aspiring website developer from South Africa. Extroverted and I love 
                <br/>workjing on projects with others in a team.
                
               
                
            </p>
            <ul className="social-icons">
                <li><a href ="https://github.com/Exodera" target={'_blank'} rel="noreferrer"><AiFillGithub/></a></li>
                <li><a href ="https://www.linkedin.com/in/oratile-dithlage-401453121/" target={'_blank'} rel="noreferrer"><AiFillLinkedin/></a></li>
                <li><a href ="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target={'_blank'} rel="noreferrer"><AiFillMail/></a></li>
            </ul>
         
        </div>
        <div className="skills">
            <h1>Skills</h1>
            <ol className="list">
                <li className="item">
                    <h2>Front-End Technologies</h2>
                    <span>ReactJS, HTML, CSS, Figma</span>
                </li>
                <li className="item">
                    <h2>Programming Languages</h2>
                    <span>JavaScript, C#, Dart</span>          
                </li>
            </ol>

        </div>
    </div>
    )
 
}

export default Home