import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/Homepage.scss"
import GamesIcon from '@material-ui/icons/Games';

// icons images
import slider1 from '../assets/images/slider1.jpg'
import slider2 from '../assets/images/slider2.jpg'

import gameimage1 from  '../assets/images/freefire.jpeg'
import gameimage2 from  '../assets/images/mobilelegends.jpg'
import gameimage3 from  '../assets/images/point-1.jpg'
import gameimage4 from  '../assets/images/pubg.jpg'
import gameimage5 from  '../assets/images/zula.jpg'
import gameimage6 from  '../assets/images/pubglite.jpg'

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Game from '../components/Game';




function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button
        className='nextBtn'
        onClick={onClick}
        >          
            <ChevronRightIcon/>
        </button>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        className="prevBtn"
        onClick={onClick}
      >
          <ChevronLeftIcon/>
          </button>
    );
  }

  

function Homepage() {

    // Slider Settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/> ,
        prevArrow: <SamplePrevArrow/>
    };

    

    return (
        <div className='page homepage'>
            {/* <div className="slider">
                <Slider {...settings}>
                    <div>
                        <img src={slider1} width='100%' height='auto' className='sliderElement sliderElement1'></img>
                    </div>
                    <a href='google.com'>
                        <img src={slider2} width='100%' height='auto' className='sliderElement sliderElement2'></img>
                    </a>
                </Slider> 
            </div> */}
            <div className="gamesTitle"><div className="gamesTitleInside"><p className='textTitle'><GamesIcon/> OYUNLAR</p></div></div>
            <div className="gamesCont">
                <Game image={gameimage3} text="Point Blank"/>
                <Game image={gameimage2} text="MOBILE LEGENDS"/>
                <Game image={gameimage4} text="POINT"/>
                <Game image={gameimage5} text="POINT"/>
                <Game image={gameimage1} text="PUBG"/>
                <Game image={gameimage6} text="POINT"/>
            </div>
            <div className="gamesTitle"><div className="gamesTitleInside"><p className='textTitle'><GamesIcon/> BENEFITS</p></div></div>
            <div className="gamesCont">
                <Game image={gameimage3} text="Point Blank"/>
                <Game image={gameimage2} text="MOBILE LEGENDS"/>
                <Game image={gameimage4} text="POINT"/>
                <Game image={gameimage5} text="POINT"/>
                <Game image={gameimage1} text="PUBG"/>
                <Game image={gameimage6} text="POINT"/>
            </div>
        </div>
    )
}

export default Homepage
