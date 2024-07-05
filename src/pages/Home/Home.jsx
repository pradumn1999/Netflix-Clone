import React from 'react';
import "./Home.css";
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/cards/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards';

const Home = () => {
    return (
        <div className='home'>
            <Navbar/>
            <div className='hero'>
               <img src={hero_banner} alt=""  className='banner_img'/>
               <div className='hero_caption'>
                <img src={hero_title} alt="" className='caption_img' />
                <p>Hakan is a young shopkeeper whose modern world gets turned upside down when he learns that he is connected to a secret ancient order that is tasked with protecting Istanbul from an immortal enemy. He struggles to choose between his duties as the Protector and a new love he comes across.</p>
                 <div className="hero_btns">
                    <button  className='btn'><img src={play_icon} alt="" />Play</button>
                    <button className='btn dark-btn'><img src={info_icon} alt=""  />More Info</button>
                 </div>
                 <TitleCards />
               </div>
            </div>
            <div className='title'>
               
                <TitleCards title={"BluckBuster on Netflix"} category={"popular"}/>
                <TitleCards title={"Top on Netflix"} category={"top_rated"}/>
                <TitleCards title={"Upcoming on Netflix"} category={"upcoming"}/>
                <TitleCards title={"Popular Show on Netflix"} category={"now_playing"}/>

            </div>
            <Footer/>
        </div>
    );
}

export default Home;