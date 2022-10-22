import React from "react";
import "./Footer.css"
import {AiFillFacebook} from "react-icons/ai"
import {AiFillTwitterSquare} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"




 

const Footer = ()=>{
    return (
        <div className="footer">
            <ul className="social-media">
            <li><a href ="https://github.com/"><AiFillFacebook/></a></li>
            <li><a href ="https://www.instagram.com/exodera47/"><AiFillInstagram/></a></li>
            <li><a href ="https://github.com/"><AiFillTwitterSquare/></a></li>
           

            </ul>
            
            <p>&copy; 2022 oratech.com</p>
            
        </div>
    )
    
}

export default Footer