import React from 'react'
import '../assets/css/Footer.css'
function Footer() {
    return (
        <footer>
            <div className="footerCont">
            <div className='f1'>
                <div className='text-cont-f'>
                    <h2>Haqqımızda</h2>
                    <p className='text'>
                        Saytımız Azərbaycanda oyunlara ödəniş etmək istəyən oyunçular üçün   
                        rahat və sərfəli qiymətə ödəniş edəbiləcəyi bir saytdır. Əgər səndə     
                        hansısa oyuna ödəniş etmək istəyirsənsə sağ aşağıda çıxan mesaj     
                        qutucuğunnan oyunun adını yazıb saytımızda olub olmadığı haqda  
                        məlumat əldə edə bilərsiniz
                    </p>
                </div>

                <div className='text-cont-f'>
                    <h2>GoAfaz.com</h2>   
                    <p>
                        <a href='#'>Oyunlar</a>
                        <a href='#'>Ödəmə Yöntəmləri</a>
                        <a href='#'>Qanun və Qaydalar</a>
                        <a href='#'>Hesab Nömrələri</a>
                        <a href='#'>Haqqımızda</a>
                        <a href='#'>Əlaqə</a>
                    </p>
                </div>

                <div className='text-cont-f'>
                    <h2>Məşhur Oyunlar</h2>
                    <p>
                        <a href='#'>Pubg Mobile UC</a>
                    </p>
                </div>
            </div>
            
            <hr/>

            <div className='f2'>
                <a className='social-cont social-cont1' href="">f</a>
                <a className='social-cont social-cont2' href="">t</a>
                <a className='social-cont social-cont3' href="">i</a>
                <a className='social-cont social-cont4' href="">y</a>
            </div>

            <p className='f3'>Copyright © 2021 Bütün hüquqları qorunur. </p>
            </div>
        </footer>
    )
}

export default Footer
