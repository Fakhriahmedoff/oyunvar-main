import React from 'react'
import '../assets/css/SingleGame.scss'
import GamesIcon from '@material-ui/icons/Games';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import pubg from '../assets/images/pubg.jpg'

function SingleGame() {
    const bgImage =  {
        backgroundImage: `url(${pubg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        filter:'blur(0.15)',
    }
    return (
        <div className='page singlegame'>
            <div className="gamesTitle"><div className="gamesTitleInside"><p className='textTitle'><SportsEsportsIcon/> PUBG</p></div></div>
            <div className="row">
                <div className="aboutGame" style={bgImage}>
                    <div  className='gameImage'></div>
                    <div className="aboutCont">
                        <h2>PUBG</h2>    
                        <p>ABout title</p>    
                        <div className='line'></div>
                    </div>
                </div>
                <div className="gameBuy">
                    <table>
                        <tr className='tHead'> <td>Ödəniş növü</td>  <td>Miqdar</td> <td>Qiymət</td>  <td>AL</td> </tr>
                        <tr className='tBody'> <td>100 UC</td>  <td>1kq</td>    <td>100azn</td>  <td><button className='buyButton'>AL</button></td> </tr>
                        <tr className='tBody'> <td>100 UC</td>  <td>1kq</td>    <td>100azn</td>  <td><button className='buyButton'>AL</button></td> </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default SingleGame
