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
import IconButton from '@material-ui/core/IconButton';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import auth from './auth'


import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
const useStyles1 = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });

  

const useStyles = makeStyles((theme) => ({
    button: {
      height:'30px',
      display: 'flex',
      columnGap:'40px',
    },
  }));


function Navbar() {
    const [loginOpen , loginClose , regOpen , regClose,openBalanceUp, closeBalanceUp, openBalance ,openbuyGameUp, loggged, setloggged, person_token] = useContext(StateListingContext)
    const classes = useStyles()
    const classes1 = useStyles1();
    const mobilenav = useMediaQuery('(max-width:1200px)');

    const logout = () =>{
        setloggged(false)
        sessionStorage.clear()
        localStorage.clear()
        window.location.reload()
    }

    const [state, setState] = React.useState({
        left: false,
      });

    const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    }

    setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
    <div className={clsx(classes1.list, {[classes1.fullList]: anchor === 'top' || anchor === 'bottom',})} onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
        <div className="buttonsDrawer">
            <p className='drawerTitle'>Oyunvar.az</p>
            {loggged &&  <Link to='/member-area'><Button className={classes.button}   variant="contained" color="secondary"> <ContactMailRoundedIcon/>&#160;  Şəxsi Kabinet</Button></Link>}
            <Button className={classes.button} onClick={openBalanceUp} variant="contained" > <PaymentRoundedIcon/> &#160;  Balans yüklə</Button>
            {!loggged && <Button className={classes.button} onClick={loginOpen} variant="contained"> <ExitToAppIcon/>&#160;  Giriş</Button> }
            {!loggged && <Button className={classes.button} onClick={regOpen} variant="contained"> <GroupAddIcon/>&#160;   Qeydiyyat</Button> }
            {loggged &&  <Link to='/member-area'><Button className={classes.button}  onClick={logout} variant="outlined" color="primary"> <ExitToAppIcon/>&#160;  Çıxış</Button></Link>}
            <Link to='/about' className='navbar-text'><InfoOutlinedIcon/> Haqqımızda</Link>
            <Link to='/contact' className='navbar-text'><ContactSupportOutlinedIcon/>  Əlaqə</Link>
        </div>
    </div>
    );
    return (
        <header>
            <nav>
                    <div className='text-cont'>

                        <Link to="/"><img  height='20px' src={logo} width='50px' height='auto' alt="" /></Link> 
                        {
                            !mobilenav &&
                            <>
                            <Link to='/about' className='navbar-text'><InfoOutlinedIcon/> Haqqımızda</Link>
                            <Link to='/contact' className='navbar-text'><ContactSupportOutlinedIcon/>  Əlaqə</Link>
                            {/* <a className='navbar-text'><i className="fas fa-wallet"></i>  Bank Hesablarımız</a> */}
                            </>
                        }
                    </div>
                    
                        <div className='btn-cont'>
                         {
                            !mobilenav ?
                            <>
                                {loggged &&  <Link to='/member-area'><Button className={classes.button}  onClick={logout} variant="outlined" color="primary"> <ExitToAppIcon/>&#160;  Çıxış</Button></Link>}
                                <Button className={classes.button} onClick={openBalanceUp} variant="contained" > <PaymentRoundedIcon/> &#160;  Balans yüklə</Button>
                                {!loggged && <Button className={classes.button} onClick={regOpen} variant="contained"> <GroupAddIcon/>&#160;   Qeydiyyat</Button> }
                                {!loggged && <Button className={classes.button} onClick={loginOpen} variant="contained"> <ExitToAppIcon/>&#160;  Giriş</Button> }
                                {loggged &&  <Link to='/member-area'><Button className={classes.button}   variant="contained" color="secondary"> <ContactMailRoundedIcon/>&#160;  Şəxsi Kabinet</Button></Link>}
                            </>
                            :
                            <React.Fragment key={'left'}>
                                <IconButton className='menuBtn' aria-label="more" aria-controls="long-menu" aria-haspopup="true" onClick={toggleDrawer('left', true)}>
                                    <MenuOpenIcon />
                                </IconButton>
                                <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                                {list('left')}
                                </Drawer>
                            </React.Fragment>
                            }
                        </div>
            </nav>
        </header>
    )
}

export default Navbar
