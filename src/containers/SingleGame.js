import React, { useState , useContext, useEffect } from 'react'
import {StateListingContext} from '../components/StateListingProvide'
import '../assets/css/SingleGame.scss'
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import pubg from '../assets/images/pubg.jpg'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function SingleGame() {
    const bgImage =  {
        backgroundImage: `url(${pubg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        filter:'blur(0.15)',
    }
    const [loginOpen , loginClose , regOpen , regClose,openBalanceUp, closeBalanceUp, openBalance ,openbuyGameUp, loggged, setloggged, person_token] = useContext(StateListingContext)
    const {id} = useParams()
    const [SgameData, setSgameData] = useState({})
    const [gameRows, setGameRows] = useState([])

    const getSingleGame = async () => {
        const resp = await axios.get(`https://oyunvar.az/api/oyunlar/${id}`)
        setSgameData(resp.data.game)
        console.log(resp.data)
        setGameRows(resp.data.rows)
    }

    useEffect(() => {
        getSingleGame()

    }, [])

    return (
        <div className='page singlegame'>
            <div className="gamesTitle"><div className="gamesTitleInside"><p className='textTitle'><SportsEsportsIcon/> PUBG</p></div></div>
            <div className="row">
                <div className="aboutGame" style={bgImage}>
                    <div  className='gameImage'></div>
                    <div className="aboutCont">
                        <h2>{SgameData.name}</h2>    
                        <p>{SgameData.description}</p>    
                        <div className='line'></div>
                    </div>
                </div>
                <div className="gameBuy">
                    <table>
                        <tr className='tHead'> <td>Ödəniş növü</td>  <td>Miqdar</td> <td>Qiymət</td>  <td>AL</td> </tr>
                        {gameRows.map(game => <tr className='tBody'> <td>{game.name}</td>  <td>{game.stock}</td>    <td>{game.price} AZN</td>  <td><button onClick={() => openbuyGameUp(game.id , game.price , game.name)} className='buyButton'>AL</button></td> </tr>)}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default SingleGame
