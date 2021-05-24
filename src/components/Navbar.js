import { useMediaQuery } from '@material-ui/core'
import React from 'react'
import '../assets/css/Navbar.css'
import logo from '../assets/images/logo.png'
function Navbar() {
    const mobilenav = useMediaQuery('(max-width:1200px)');

    return (
        <header>
            <nav>

                
                    <div className='text-cont'>

                        <img width='20px' height='20px' src={logo} width='150px' height='auto' alt="" />
                        {
                            !mobilenav &&
                            <>
                            <a className='navbar-text'><i className="fas fa-info-circle"></i>  Haqqımızda</a>
                            <a className='navbar-text'><i className="fas fa-phone-square-alt"></i>  Əlaqə</a>
                            <a className='navbar-text'><i className="fas fa-wallet"></i>  Bank Hesablarımız</a>
                            </>
                        }
                    </div>

                    {
                        !mobilenav &&
                        <div className='btn-cont'>
                            <button className='btn btn-y'> <i className="fas fa-plus-circle"></i>    Balans yüklə</button>
                            <button className='btn btn'>   <i className="fas fa-user-plus"></i>  Qeydiyyat</button>
                            <button className='btn btn'>   <i></i>  Giriş </button>
                        </div>
                    }

            </nav>
        </header>
    )
}

export default Navbar
