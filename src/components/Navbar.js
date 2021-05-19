import React from 'react'
import '../assets/css/Navbar.css'
function Navbar() {
    return (
        <header>
            <nav>
                <div className='text-cont'>
                    <p className='navbar-text'><i class="fas fa-info-circle"></i>  Haqqımızda</p>
                    <p className='navbar-text'><i class="fas fa-phone-square-alt"></i>  Əlaqə</p>
                    <p className='navbar-text'><i class="fas fa-wallet"></i>  Bank Hesablarımız</p>
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
