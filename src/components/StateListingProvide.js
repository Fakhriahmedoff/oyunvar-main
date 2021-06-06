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
export const StateListingContext = createContext()
export function StateListingProvide(props) {   
    
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const [openBalance, setopenBalance] = React.useState(false);
    const [buyGame, setbuyGame] = React.useState(false);
    const [gameID, setGameID] = React.useState();


    const gameIDsetter = () => {
        setGameID(true);
    };
    const openBalanceUp = () => {
        setopenBalance(true);
    };
    const closeBalanceUp = () => {
        setopenBalance(false);
    };
    const openbuyGameUp = () => {
        setbuyGame(true);
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
    const submitForm = () => {

    }
    return (
        <StateListingContext.Provider value={[loginOpen , loginClose , regOpen , regClose,openBalanceUp, closeBalanceUp, openBalance ,openbuyGameUp]}>
            
            {props.children}

            <Modal  
                style={{display:"flex", justifyContent:"center",overflow:"auto"}}
                open={open3}
                // onClose={handleClose3}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description">
                {<LoginPage functionClose={() => loginClose()}  />}
            </Modal>

            <Modal  
                style={{display:"flex", justifyContent:"center",overflow:"auto"}}
                open={open4}
                // onClose={handleClose4}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description">
                {<Registration functionCloseReg={() => regClose()}  />}
            </Modal>
            
            <Dialog open={openBalance} onClose={closeBalanceUp} aria-labelledby="form-dialog-title">
                <form onSubmit={submitForm}>
                    <DialogTitle id="form-dialog-title">Hesab Artırma</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        Hesabı artır düyməsinı kilklıyərək balansınızı arıtra bilərsiniz, Çeki göndərdikdən sonra 5 dəqiqə ərzində məbləğ balansa yüklənir.
                    </DialogContentText>
                    <DialogContentText>
                        Bizdən alın - OyunVar.az
                    </DialogContentText>
                    <Button color="primary" className='balance_up_upload'>{billPhoto?.name !== undefined ? billPhoto.name  : `Çek şəklini yüklə` }<input onChange={ppchanger} name="profile" className='input addFileInput' type="file" /></Button>
                    <TextField autoFocus margin="dense" id="name" onChange={changePrice} value={price} label="Miqdarı daxil edin" type="text" fullWidth />
                    </DialogContent>

                    <DialogActions>
                    <Button onClick={closeBalanceUp} color="primary">
                        Ləğv et
                    </Button>
                    <Button onClick={submitForm} color="primary">
                        Təsdiqlə
                    </Button>
                    </DialogActions>
                </form>
            </Dialog>



            <Dialog open={buyGame} onClose={closebuyGameUp} aria-labelledby="form-dialog-title">
                <form onSubmit={submitForm}>
                    <DialogTitle id="form-dialog-title">Ödəmə</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        Hesabı artır düyməsinı kilklıyərək balansınızı arıtra bilərsiniz, Çeki göndərdikdən sonra 5 dəqiqə ərzində məbləğ balansa yüklənir.
                    </DialogContentText>
                    <DialogContentText>
                        Bizdən alın - OyunVar.az
                    </DialogContentText>
                    <TextField autoFocus margin="dense" id="name" onChange={changePrice} value={price} label="Oyun id daxil edin" type="text" fullWidth />
                    </DialogContent>

                    <DialogActions>
                    <Button onClick={closebuyGameUp} color="primary">
                        Ləğv et
                    </Button>
                    <Button onClick={submitForm} color="primary">
                        Təsdiqlə
                    </Button>
                    </DialogActions>
                </form>

            </Dialog>




            
        </StateListingContext.Provider>
    )
}

