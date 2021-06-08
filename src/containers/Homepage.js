import React, { useEffect } from 'react'

import "../assets/css/Homepage.scss"
import GamesIcon from '@material-ui/icons/Games';

// icons images


import gameimage1 from  '../assets/images/freefire.jpeg'
import gameimage2 from  '../assets/images/mobilelegends.jpg'
import gameimage3 from  '../assets/images/point-1.jpg'
import gameimage4 from  '../assets/images/pubg.jpg'
import gameimage5 from  '../assets/images/zula.jpg'
import gameimage6 from  '../assets/images/pubglite.jpg'



import Game from '../components/Game';
import { useLocation } from 'react-router-dom';
import auth from '../components/auth';





  

function Homepage() {
    const location = useLocation();
    
    

    return (
         
        <div className='page homepage'>
           
            <div>
            <div className="gamesTitle"><div className="gamesTitleInside"><p className='textTitle'><GamesIcon/> OYUNLAR</p></div></div>
            <div className="gamesCont">
                <Game image={gameimage3} id='2' text="Point Blank"/>
                <Game image={gameimage2} id='2' text="MOBILE LEGENDS"/>
                <Game image={gameimage4} id='2' text="PUBG"/>
                <Game image={gameimage5} id='2' text="ZULA"/>
                <Game image={gameimage1} id='2' text="FREE FIRE"/>
                <Game image={gameimage6} id='2' text="PUBG LITE"/>
            </div>
            </div>
            
        </div>
    )
}

export default Homepage
