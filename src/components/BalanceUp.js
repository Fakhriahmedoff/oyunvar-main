import { Button } from '@material-ui/core'
import React from 'react'
import '../assets/css/BalanceUp.scss'
import { makeStyles } from '@material-ui/core/styles';

const useStylesBtn = makeStyles({
    btn:{
        fontFamily:'Poppins'
    }
  });
function BalanceUp() {
    const btn = useStylesBtn()
    return (
        <div>
            Balans Artırma
            <p className='yourbalance'>Sizin hazırkı balansınız - </p>
            <Button className={btn.btn} variant="contained">Balans Artır</Button> 
        </div>
    )
}

export default BalanceUp
