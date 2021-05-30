// import ForgotPass from '../components/ForgotPass';
// import NewPass from '../components/NewPass';
import {StateListingProvide} from './StateListingProvide'
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
    const notify = () => toast.info(`Hesabınıza daxil oldunuz!`);
    const [loader, setloader] = useState(false)
    const clickHandler = () => {
        props.functionClose()
        props.registerFunc()
    }
    const [Error, setError] = useState(false)
    const onSubmit =  (values) => {
        setloader(true)
        // axios.post('https://nehra.az/public/api/check', { email: values.email ,  password: values.password }  )
        //  .then(res => (setloader(false) , res.status === 200 && console.log(res)  , localStorage.setItem("LoginUserData" , JSON.stringify(res.data.user)) , props.functionClose() , notify())) 
        //  .catch(err => (setError(true) , setloader(false)))
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
            <Form className="loginPage" action='/' method="POST">
                <div className="buttonCont"><button type='button' onClick={() => props.functionClose()} className="removeModalBtn">×</button></div>
                <p className="title">Giriş</p>
                <Field className="inputLogin" name="email" placeholder={`Elektron poçt`}/>
                <div className="errors"><ErrorMessage name="email"/></div>
                <Field type="password" className="inputLogin" name="password" placeholder={`Şifrəniz`}/>
                <div className="errors"><ErrorMessage name="password"/></div>
                <Button1 value={`Daxil olun`} type="submit"/>
                { Error && <p className="errors errorsAndForgot">{`Daxil etdiyiniz məlumatlar yanlışdır. `}<button type='button' onClick={handleOpen} className='forgotPassBtn'>{`Şifrəni unutmusunuz?`}</button> </p>}
                <p className="subTitle">{`Hesabınız yoxdur? `}<button className="regBtn" onClick={() => clickHandler()}>{`Qeydiyyatdan keçin `}</button> </p>
                {loader && <ReactLoading type={"bubbles"} color={"lightblue"} height={17} width={75} />}
            </Form>
        </Formik>
    )
}

export default LoginPage
