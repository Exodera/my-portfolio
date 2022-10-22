import React from "react";
import "./Footer.css"
import {AiFillFacebook} from "react-icons/ai"
import {AiFillTwitterSquare} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"




 

const Footer = ()=>{
    return (
        <div className="footer">
            <ul className="social-media">
                <li><a href ="https://www.facebook.com/profile.php?id=100076272259913"><AiFillFacebook/></a></li>
                <li><a href ="https://www.instagram.com/exodera47/"><AiFillInstagram/></a></li>
                <li><a href ="https://www.facebook.com/profile.php?id=100076272259913"><AiFillTwitterSquare/></a></li>
            </ul>
            
            <p>&copy; 2022 oratech.com</p>
            
        </div>
    )
    
}

export default Footer