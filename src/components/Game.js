import React from 'react'
import '../assets/css/GameCard.scss'
function Game(props) {
    
    return (
        <div className='gameCard'>
            <img width="100%" height="225px" src={props.image} />
            <p className="textCont">{props.text}</p>
        </div>
    )
}

export default Game
