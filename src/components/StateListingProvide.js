import React, {useState , createContext, useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from './LoginPage'
import Registration from './Registration'
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import '../assets/css/balanceUpModal.scss'
import axios from 'axios';
export const StateListingContext = createContext()


export function StateListingProvide(props) {   
    

    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const [openBalance, setopenBalance] = React.useState(false);
    const [buyGame, setbuyGame] = React.useState(false);
    const [game_accountID, setGameAccountID] = React.useState();
    const [loggged, setloggged] = useState(false)
    const [person_token, setperson_token] = useState(JSON.parse(localStorage.getItem('token') === null ? 1 : localStorage.getItem('token')))
    const [GameId, setGameId] = useState(null)
    const [GamePrice, setGamePrice] = useState(null)
    const [PaymentType, setPaymentType] = useState(null)


    const notifyLogin = () => toast.error(`Hesabınıza daxil olun!`);
    const notifyBalanceUp = () => toast.success(`Sorğunuz göndərilmişdir , tezliklə təsdiqlənəcək!`);
    const notifyAgain = () => toast.error(`Bir müddət sonra yenidən cəhd edin!`);
    const notifyEnterRight = () => toast.error(`Məlumatları düzgün daxil edin!`);

    const authCheck = async() => {
        try {
            const resp = await axios.post('https://oyunvar.az/api/getuserdata' , {token:person_token})
            if(resp.data.api_token !== undefined &&  resp.data.api_token !== null && resp.data.api_token === person_token)
            {
                setperson_token(resp.data.api_token)
                setloggged(true)
                sessionStorage.setItem('logged' , true)
            }
            else 
            {
                setloggged(false)
                sessionStorage.setItem('logged' , false)
            }
        } catch (error) {
            setloggged(false)
            sessionStorage.setItem('logged' , false)
            localStorage.removeItem('token')
            setperson_token(null)
        }
    }


    const gameIDsetter = () => {
        setGameAccountID(true);
    };
    const openBalanceUp = () => {
        setopenBalance(true);
    };
    const closeBalanceUp = () => {
        setopenBalance(false);
    };

    const openbuyGameUp = (id , price , type) => {
        setbuyGame(true);
        setGameId(id)
        setGamePrice(price)
        setPaymentType(type)
        console.log(id)
    };
    const closebuyGameUp = () => {
        setbuyGame(false);
    };


    const loginOpen = () => {
        setOpen3(true)
    }
    const loginClose = () => {
        setOpen3(false)  
    };
    
    const regOpen = () => {
        setOpen4(true)
    }
    const regClose = () => {
        setOpen4(false)  
    };




    const [billPhoto, setbillPhoto] = useState(null)
    
    const [{alt, src}, setImg] = useState({
        src: "",
        alt: 'Upload an Image'
    });
    
    const ppchanger = (e) => {
        if(e.target.files[0]) {
            setImg({
                src: URL.createObjectURL(e.target.files[0]),
                alt: e.target.files[0].name
            });    
        }   
        setbillPhoto(e.target.files[0])
        console.log(e.target.files[0]);
    }

    const [price, setprice] = useState()

    const changePrice = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setprice(value)
    }
    const changeAccountID = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setGameAccountID(value)
    }


    const submitBalanceUpForm = async (e) => {
        e.preventDefault();
        if (loggged) {
            if ( price > 0 && billPhoto !== null) {
                const formData = new FormData()
                formData.append('invoice' , billPhoto)
                formData.append('account_id' , game_accountID)
                formData.append('token' , person_token)
                formData.append('price' , price)
                const resp = await axios.post(`https://oyunvar.az/api/balanceup` , formData )
                if(resp.status === 200)
                {
                    notifyBalanceUp()
                    closeBalanceUp()
                }
                else 
                {
                    notifyAgain()
                }
            }
            else 
            {
                notifyEnterRight()
            }
        }
        else
        {
            notifyLogin()
            closeBalanceUp()
            loginOpen()
        }

    }


    const submitGameBuy = async (e) => {
        e.preventDefault();
        if (loggged) {
            if (game_accountID !== null && game_accountID !== "") {
                console.log("YES")
                const formData = new FormData()
                formData.append('game_id' , GameId)
                formData.append('account_id' , game_accountID)
                formData.append('token' , person_token)
                formData.append('price' , GamePrice)
                const resp = await axios.post(`https://oyunvar.az/api/ordergame` , formData)
                if(resp.status === 200)
                {
                    notifyBalanceUp()
                    closebuyGameUp()
                }
                else 
                {
                    notifyAgain()
                }
            }
            else 
            {
                notifyEnterRight()
            }
        }
        else 
        {
            notifyLogin()
            closebuyGameUp()
            loginOpen()
        }
    }
    useEffect(() => {
        if (sessionStorage.getItem('logged') !== null && sessionStorage.getItem('logged') !== undefined) {
            setloggged(JSON.parse(sessionStorage.getItem('logged')))
        }
        authCheck()
    }, [])

    return (
        <StateListingContext.Provider value={[loginOpen , loginClose , regOpen , regClose,openBalanceUp, closeBalanceUp, openBalance ,openbuyGameUp, loggged, setloggged, person_token]}>
            
            {props.children}

            <Modal  
                style={{display:"flex", justifyContent:"center",overflow:"auto"}}
                open={open3}
                // onClose={handleClose3}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description">
                {<LoginPage functionClose={() => loginClose()}  regOpen={() => regOpen()} />}
            </Modal>

            <Modal  
                style={{display:"flex", justifyContent:"center",overflow:"auto"}}
                open={open4}
                // onClose={handleClose4}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description">
                {<Registration functionCloseReg={() => regClose()}  />}
            </Modal>
            



            {/* Add Balance */}
            <Dialog open={openBalance} onClose={closeBalanceUp} aria-labelledby="form-dialog-title">
                <form onSubmit={(e) => submitBalanceUpForm(e)}>
                    <DialogTitle id="form-dialog-title">Hesab Artırma</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        Hesabı artır düyməsinı kilklıyərək balansınızı arıtra bilərsiniz, Çeki göndərdikdən sonra 5 dəqiqə ərzində məbləğ balansa yüklənir.
                    </DialogContentText>
                    <DialogContentText>
                        Bizdən alın - OyunVar.az
                    </DialogContentText>
                    <Button type='button' variant='outlined' color="secondary" className='balance_up_upload'>{billPhoto?.name !== undefined ? billPhoto.name  : `Çek şəklini yüklə` }<input onChange={ppchanger} name="profile" className='input addFileInput' type="file" /></Button>
                    
                    <TextField autoFocus margin="dense" id="name" onChange={changePrice} value={price} label="Miqdarı daxil edin" type="text" fullWidth />
                    </DialogContent>

                    <DialogActions>
                    <Button type='button' onClick={closeBalanceUp} color="primary">
                        Ləğv et
                    </Button>
                    <Button type='submit' color="primary">
                        Təsdiqlə
                    </Button>
                    </DialogActions>
                </form>
            </Dialog>
            {/* Add Balance */}




            {/*#region Buy Game */}
                <Dialog open={buyGame} onClose={closebuyGameUp} aria-labelledby="form-dialog-title">
                    <form onSubmit={(e) => submitGameBuy(e)}>
                        <DialogTitle id="form-dialog-title">Ödəmə</DialogTitle>
                        <DialogContent>
                        <DialogContentText>
                            <p>Balansınız - </p>
                            <p>Game id - {GameId}</p>
                            <p>Ödəniş növü - {PaymentType}</p>
                            <p>Qiymət - {GamePrice} AZN</p>
                            <p>Bizdən alın - OyunVar.az</p>
                        </DialogContentText>
                        <TextField autoFocus margin="dense" id="name" onChange={changeAccountID} value={game_accountID} label="Oyun id daxil edin" type="text" fullWidth />
                        </DialogContent>

                        <DialogActions>
                        <Button type='button' onClick={closebuyGameUp} color="primary">
                            Ləğv et
                        </Button>
                        <Button type='submit'  color="primary">
                            Təsdiqlə
                        </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            {/*#endregion Buy Game */}




            
        </StateListingContext.Provider>
    )
}

