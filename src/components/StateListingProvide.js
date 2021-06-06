import React, {useState , createContext, useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from './LoginPage'
import Registration from './Registration'
import Modal from '@material-ui/core/Modal';

export const StateListingContext = createContext()
export function StateListingProvide(props) {   
    
    const [open3, setOpen3] = React.useState(false);
    
    const loginOpen = () => {
        setOpen3(true)
    }
    const loginClose = () => {
        setOpen3(false)  
    };
    
    const [open4, setOpen4] = React.useState(false);
    
    const regOpen = () => {
        setOpen4(true)
    }
    const regClose = () => {
        setOpen4(false)  
    };


    return (
        <StateListingContext.Provider value={[loginOpen , loginClose , regOpen , regClose]}>
            
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




            
        </StateListingContext.Provider>
    )
}

