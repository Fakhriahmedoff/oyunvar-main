import React, { useState , useContext } from 'react'
import {StateListingContext} from './StateListingProvide'
import { Button } from '@material-ui/core'
import '../assets/css/BalanceUp.scss'
import { makeStyles } from '@material-ui/core/styles';
const useStylesBtn = makeStyles({
    btn:{
        fontFamily:'Poppins'
    }
  });
function BalanceUp() {
    const [ loginOpen , loginClose , regOpen , regClose,openBalanceUp, closeBalanceUp, openBalance ,openbuyGameUp, loggged, setloggged, person_token] = useContext(StateListingContext)
    
    const btn = useStylesBtn()
    return (
        <div>
            Balans Artırma
            <p className='yourbalance'>Sizin hazırkı balansınız - </p>
            <Button onClick={openBalanceUp} className={btn.btn} variant="contained">Balans Artır</Button> 
        </div>
    )
}

export default BalanceUp
