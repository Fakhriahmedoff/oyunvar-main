import { Link } from '@material-ui/core'
import React from 'react'
import '../assets/css/GameCard.scss'
function Game(props) {
    
    return (
        <Link to='/game/1' className='gameCard'>
            <img width="100%" height="225px" src={props.image} />
            <p className="textCont">{props.text}</p>
        </Link>
    )
}

export default Game
