import React from 'react';
import './Footer.css'
import instagram_icon from '../../assets/instagram_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import youtube_icon from '../../assets/youtube_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = ()=> {
    return (
        <div className='footer'>
            <div className="social-media">
                <img src={instagram_icon} alt="" />
                <img src={twitter_icon} alt="" />
                <img src={youtube_icon} alt="" />
                <img src={facebook_icon} alt="" />
            </div>
            <ul>
                <li>Audio Discription</li>
                <li>Invester</li>
                <li>Legial</li>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookies </li>
                <li>Git Card</li>
                <li>Term of use</li>
                <li>Corporte</li>
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Contect Us</li>
            </ul>
            <p className='copyRight-text'>@ 1997-2024 Netflix, Inc </p>
        </div>
    );
}

export default Footer;