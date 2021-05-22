import { Link } from '@material-ui/core'
import React from 'react'
import '../assets/css/BenefitCard.scss'
function Benefit(props) {
    
    return (
        <div className='benefitCard'>
            <h3 className='title'>Başlıq</h3>
            <img src={props.image} width='200px'/>
            <p className="text"> {props.text}</p>
        </div>
    )
}

export default Benefit
