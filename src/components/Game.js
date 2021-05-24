import React from 'react'
import '../assets/css/GameCard.scss'
import {Link } from 'react-router-dom'
function Game(props) {
    
    return (
        <Link to='/games/1' className='gameCard'>
            <img width="100%" height="225px" src={props.image} />
            <p className="textCont">{props.text}</p>
        </Link>
    )
}

export default Game
