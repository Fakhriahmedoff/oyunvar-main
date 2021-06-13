// import ForgotPass from '../components/ForgotPass';
// import NewPass from '../components/NewPass';
import {StateListingContext} from './StateListingProvide'
import Modal from '@material-ui/core/Modal';
import React, { useState , useContext } from 'react'
import '../assets/css/loginPage.scss'
import Button1 from './Button1'
import {Formik , Form , Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactLoading from 'react-loading';
toast.configure()

function LoginPage(props) {
    const [loginOpen , loginClose , regOpen , regClose,openBalanceUp, closeBalanceUp, openBalance ,openbuyGameUp, loggged, setloggged, person_token] = useContext(StateListingContext)



    const notify = () => toast.info(`Hesabınıza daxil oldunuz!`);
    const notifyErr = () => toast.error(`Daxil etdiyiniz məlumatlar yanlışdır!`);
    const [loader, setloader] = useState(false)
    const clickHandler = () => {
        props.functionClose()
        props.regOpen()
    }


    const onSubmit = async (values) => {
        setloader(true)
        try {
            const resp = await axios.post('https://oyunvar.az/api/login', { email: values.email ,  password: values.password }  )
            console.log(resp)
            localStorage.setItem("token" , JSON.stringify(resp.data.api_token))
            setloggged(true)
            props.functionClose()
            notify()
            setloader(false)
        } 
        catch (error) {
            setloader(false)
            notifyErr()
        }

    }


    const initialValues = {
        email:'',
        password:'',
    }
    const validationSchema = Yup.object({
        email: Yup.string().email(`Elektron poçtunuzu düzgün daxil edin`).required('Elektron poçt daxil edin'),
        password: Yup.string().required(`Şifrənizi daxil edin`),
    })
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnChange={true} validateOnBlur={false}>
            <Form className="loginPage">
                <div className="buttonCont"><button type='button' onClick={() => props.functionClose()} className="removeModalBtn">×</button></div>
                <p className="title">Giriş</p>
                <Field className="inputLogin" name="email" placeholder={`Elektron poçt`}/>
                <div className="errors"><ErrorMessage name="email"/></div>
                <Field type="password" className="inputLogin" name="password" placeholder={`Şifrəniz`}/>
                <div className="errors"><ErrorMessage name="password"/></div>
                <Button1 value={`Daxil olun`} type="submit"/>
                { Error && <p className="errors errorsAndForgot">Daxil etdiyiniz məlumatlar yanlışdır.<button type='button' onClick={handleOpen} className='forgotPassBtn'>{`Şifrəni unutmusunuz?`}</button> </p>}
                <p className="subTitle">{`Hesabınız yoxdur? `}<button className="regBtn" type='submit' onClick={() => clickHandler()}>Qeydiyyatdan keçin</button> </p>
                {loader && <ReactLoading type={"bubbles"} color={"lightblue"} height={17} width={75} />}
            </Form>
        </Formik>
    )
}

export default LoginPage
