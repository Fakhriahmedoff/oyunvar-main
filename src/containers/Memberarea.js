import React from 'react'
import '../assets/css/memberArea.scss'
import GamesIcon from '@material-ui/icons/Games';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import pubg from '../assets/images/pubg.jpg'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import PermIdentityTwoToneIcon from '@material-ui/icons/PermIdentityTwoTone';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PaymentIcon from '@material-ui/icons/Payment';
import StoreIcon from '@material-ui/icons/Store';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link, Route, Router, Switch, useLocation } from 'react-router-dom';
import { useMediaQuery } from '@material-ui/core';
import Orders from '../components/Orders';
import BalanceUp from '../components/BalanceUp';
import Notifications from '../components/Notifications';
import Payments from '../components/Payments';
function Memberarea() {
    const location = useLocation();
    const titles = useMediaQuery('(min-width:950px)')
    

    const buttonBorder = {
        color: "white", 
        borderBottom: "3px solid #285999",
        background: 'linear-gradient(to top,rgba(91,90,254,.2),transparent)'
    }

    const buttonBorderNormal = {
        color:"#7d7068",
        borderBottom: "3px solid transparent"
    }

    const styler = (link) => {
        if (location.pathname === link) {
        return buttonBorder
        } 
        else 
        {
        return buttonBorderNormal
        }
    }        
    return (
        <div className='page memberArea'>
            <div className="sidebar" >
                <p className="gamesTitle"><AssignmentIndIcon/> Həsənbala Mürşüdov</p>
            </div>
            <div className="linksCont">
                <div className="links">
                    <Link to="/member-area/orders" style={styler('/member-area/orders')}> <StoreIcon/>  {titles && " Sifarişlər"} </Link>
                    <Link to="/member-area/balance-up" style={styler('/member-area/')}> <ShoppingBasketIcon/> {titles && "Hesab Artırma"}</Link>
                    <Link to="/member-area/notifications" style={styler('/member-area/notifications')}> <NotificationsIcon/> {titles && "Bildirişlər"} </Link>
                    <Link to="/member-area/payment-history" style={styler('/member-area/payment-history')}> <PaymentIcon/> {titles && " Ödənişlər"} </Link>
                </div>
            </div>
            <div className="row">
                

                <div className="gameBuy">
                    <Switch>
                        <Route path="/member-area/notifications"> <Notifications/></Route>
                        <Route  path="/member-area/orders"> <Orders/></Route>
                        <Route  path="/member-area/payment-history"> <Payments/> </Route>
                        <Route  path="/member-area/"> <BalanceUp/> </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Memberarea
