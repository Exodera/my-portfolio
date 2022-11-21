import React from "react";
import "./Footer.css"
import {AiFillFacebook} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"
import { AiFillGithub } from "react-icons/ai";

const Footer = ()=>{
    return (
        <div className="footer">
            <ul className="social">
                <li><a href ="https://www.facebook.com/profile.php?id=100076272259913" rel="noreferrer" target={'_blank'}><AiFillFacebook/></a></li>
                <li><a href ="https://www.instagram.com/exodera47/" rel="noreferrer" target={'_blank'}><AiFillInstagram/></a></li>
                <li><a href ="https://github.com/Exodera" rel="noreferrer" target={'_blank'}><AiFillGithub/></a></li>
            </ul>
            
            <p>&copy; 2022 oratiletech.com</p>
            
        </div>
    )
    
}

export default Footer