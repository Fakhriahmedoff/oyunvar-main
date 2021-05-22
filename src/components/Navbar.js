import React from 'react'
import '../assets/css/Navbar.css'
function Navbar() {
    return (
        <header>
            <nav>

                <div className='text-cont'>
                    <img width='20px' height='20px' src="" alt="" />
                    <a className='navbar-text'><i class="fas fa-info-circle"></i>  Haqqımızda</a>
                    <a className='navbar-text'><i class="fas fa-phone-square-alt"></i>  Əlaqə</a>
                    <a className='navbar-text'><i class="fas fa-wallet"></i>  Bank Hesablarımız</a>
                </div>

                <div className='btn-cont'>
                    <button className='btn btn-y'> <i class="fas fa-plus-circle"></i>    Balans yüklə</button>
                    <button className='btn btn'>   <i class="fas fa-user-plus"></i>  Qeydiyyat</button>
                    <button className='btn btn'>   <i></i>  Giriş </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
