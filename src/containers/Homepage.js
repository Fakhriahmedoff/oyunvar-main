import React, { useEffect, useState } from 'react'

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
import axios from 'axios';





  

function Homepage() {
    const location = useLocation();

    const [games, setgames] = useState([])
    const getAllGames = async () => {
        const resp = await axios.get('https://oyunvar.az/api/allgames')
        setgames(resp.data)
    }

    useEffect(() => {
        getAllGames()
    }, [])

    return (
         
        <div className='page homepage'>
           
            <div>
            <div className="gamesTitle"><div className="gamesTitleInside"><p className='textTitle'><GamesIcon/> OYUNLAR</p></div></div>
            <div className="gamesCont">
                {games.map(game =>  <Game image={`https://oyunvar.az/storage/app/public/${game.image}`} id={game.id} name={game.name}/>)}
            </div>
            </div>
            
        </div>
    )
}

export default Homepage
