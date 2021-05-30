import React from 'react'
import '../assets/css/memberArea.scss'
import GamesIcon from '@material-ui/icons/Games';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import pubg from '../assets/images/pubg.jpg'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { Link } from 'react-router-dom';
function Memberarea() {
    const bgImage =  {
        backgroundImage: `url(${pubg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
    }

    return (
        <div className='page memberArea'>
            <div className="gamesTitle"><div className="gamesTitleInside"><p className='textTitle'><AssignmentIndIcon/> Şəxsi Kabinet</p></div></div>
            <div className="row">
                <div className="sidebar" style={bgImage}>
                    <div  className='humanimage'></div>
                    <div className="links">
                        <button>Bildirişlər</button>
                        <button>Sifarişlər</button>
                        <button>Ödənişlər</button>
                        <button>Balans</button>
                        <Link to="/memberarea/free-shipping" className="freeShipping">
                            <button style={styler('/memberarea/free-shipping')}>
                                <LocalShippingIcon /> 
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="gameBuy">

                <Route path="/memberarea/password">
                    <About/>
                </Route>
                </div>
            </div>
        </div>
    )
}

export default Memberarea
