import { Button, useMediaQuery } from '@material-ui/core'
import React, { useState , useContext } from 'react'
import '../assets/css/Navbar.css'
import logo from '../assets/images/logo.png'
import {StateListingContext} from './StateListingProvide'
import {Link} from 'react-router-dom';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import ContactMailRoundedIcon from '@material-ui/icons/ContactMailRounded';
import PaymentRoundedIcon from '@material-ui/icons/PaymentRounded';
const useStyles = makeStyles((theme) => ({
    button: {
      height:'30px',
      display: 'flex',
      columnGap:'40px',
    },
  }));


function Navbar() {
    const [ loginOpen , loginClose , regOpen , regClose,openBalanceUp, closeBalanceUp, openBalance ,openbuyGameUp] = useContext(StateListingContext)
    const classes = useStyles()
    const mobilenav = useMediaQuery('(max-width:1200px)');
    return (
        <header>
            <nav>
                    <div className='text-cont'>

                        <Link to="/"><img width='20px' height='20px' src={logo} width='150px' height='auto' alt="" /></Link> 
                        {
                            !mobilenav &&
                            <>
                            <Link to='/about' className='navbar-text'><InfoOutlinedIcon/> Haqqımızda</Link>
                            <Link to='/contact' className='navbar-text'><ContactSupportOutlinedIcon/>  Əlaqə</Link>
                            {/* <a className='navbar-text'><i className="fas fa-wallet"></i>  Bank Hesablarımız</a> */}
                            </>
                        }
                    </div>
                    {
                        !mobilenav &&
                        <div className='btn-cont'>
                            <Button className={classes.button} onClick={openBalanceUp} variant="contained" > <PaymentRoundedIcon/> &#160;  Balans yüklə</Button>
                            <Button className={classes.button} onClick={regOpen} variant="contained"> <GroupAddIcon/>&#160;   Qeydiyyat</Button> 
                            <Button className={classes.button} onClick={loginOpen} variant="contained"> <ExitToAppIcon/>&#160;  Giriş</Button> 
                            <Link to='/member-area'><Button className={classes.button}   variant="contained" color="secondary"> <ContactMailRoundedIcon/>&#160;  Şəxsi Kabinet</Button></Link>
                        </div>
                    }
            </nav>
        </header>
    )
}

export default Navbar
