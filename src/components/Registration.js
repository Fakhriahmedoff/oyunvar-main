import React, { useState, useContext } from 'react';
import {StateListingContext} from '../components/StateListingProvide'
import '../assets/css/registrationPage.scss'
import Button1 from '../components/Button1'
import {Formik , Form , Field, ErrorMessage} from "formik"
import * as yup from 'yup';
import axios from 'axios'
import Modal from '@material-ui/core/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@material-ui/core/TextField';
import ReactLoading from 'react-loading';
// import AuthSms from '../components/AuthSms';

toast.configure()


function Registration(props) {
    const [loginOpen , loginClose , regOpen , regClose,openBalanceUp, closeBalanceUp, openBalance ,openbuyGameUp, loggged, setloggged, person_token] = useContext(StateListingContext)


    const notifyW = () => toast.error("Daxil etdiyiniz məlumatları yanlışdır!");
    const notify = () => toast.info("Hesabınız müvəfəqiyyətlə yaradıldı!");
    const notifyCheck = () => toast.error("Məlumatların düzgünlüyünü bir daha yoxlayın!");

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [loader, setloader] = useState(false)

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

    const [Error, setError] = useState(false)
    const [userId, setuserId] = useState('')

    const onSubmit =  async (values) => {
        try {
            setloader(true)
            const dt = new FormData()
            dt.append('name' , values.name)
            dt.append('email' , values.email)
            dt.append('password' , values.password)
            const resp = await axios.post('https://oyunvar.az/api/qeydiyyat', dt )
            setloggged(true)
            setloader(false) 
            regClose()
            localStorage.setItem("token" , JSON.stringify(resp.data))
            notify()
            handleOpen() 
        } catch (error) {
            notifyCheck()
            setloader(false)

        }
    }

    const [phoneValue, setphoneValue] = useState()
    const handleChange1 = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setphoneValue(value);
    }

    const initialValues = {
        name:'',
        email:'',
        // phone:'',
        password:'',
        confirmPassword:'',
    }


    const [profilePhoto, setprofilePhoto] = useState(null)
    
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
        setprofilePhoto(e.target.files[0])
        console.log(e.target.files[0]);
    }

    const [authT, setauthT] = useState(1)
    const [open, setOpen] = useState(false);

    const validationSchema = yup.object({
        name: yup.string().required( `Adınızı daxil edin`),
        email: yup.string().email(`Elektron poçtunuzu düzgün daxil edin`).required('Elektron poçt daxil edin'),
        // phone:  yup.string().required('Telefon nömrənizi daxil edin'),
        password: yup.string().matches(passRegex , (`Şifrəniz ən az 8 simvol 1 böyük hərf 1 kiçik hərf və 1 rəqəm təşkil etməlidir`) ).required(`Şifrənizi daxil edin`),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], ( `Şifrələr uyğun deyil` )).required(`Şifrənizi daxil edin`)
    })

    const authTypeHandler = (num) => {
        document.querySelector('.authType2').checked = false
        document.querySelector('.authType1').checked = false
        document.querySelector(`.authType${num}`).checked = true
        setauthT(num)
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }
    
    return (
        <div  className="registrationPage">
            <div className="buttonCont"><button type='button' onClick={() => props.functionCloseReg()} className="removeModalBtn">×</button></div>
            <p className="title">Qeydiyyat</p>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnChange={true} validateOnBlur={false}>
                <Form enctype='multipart/form-data' className="login" method="post" action="">
                    
                    <label  className="key" >Adınız Soyadınız</label>                       
                    <div className="errors">
                        <Field className="value" name="name" placeholder={"Adınız Soyadınız"}/>
                        <ErrorMessage name="name"/>
                    </div>

                    <label  className="key" >Elektron poçt ünvanı</label>                   
                    <div className="errors">
                        <Field className="value" name="email" placeholder={"nümunə@gmail.com"}/>
                        <ErrorMessage name="email"/>
                    </div>

                    {/* <label  className="key" >{`Telefon Nömrəsi`}</label>            
                    <div className="errors">            
                        <div className='phoneCont'> <span>+994</span> <Field required value={phoneValue} onChange={handleChange1} className="value" maxlength='10' minlength='9' type='text' name="phone" placeholder="0555555555"/></div>
                        <ErrorMessage name="phone"/>
                    </div>
                     */}
                    <label  className="key" >{`Şifrə`}</label>                                  
                    <div className="errors">
                        <Field type="password" className="value" name="password" placeholder="Parol" type="password"/>
                        <ErrorMessage name="password"/>
                    </div>

                    <label  className="key" >{`Şifrəni Təsdiqlə`} </label>                        
                    <div className="errors">
                        <Field type="password" className="value" name="confirmPassword" placeholder={`Şifrəni Təsdiqlə`} type="password"/>
                        <ErrorMessage name="confirmPassword"/>
                    </div>


                    <button className="submitBtn"  type="submit" > { `Daxil edin`} {loader && <ReactLoading type={"bubbles"} color={"lightblue"} height={"30px"} width={"30px"} />}</button>
                    {Error && <p className="errors">{`Daxil etdiyiniz elektron poçt artıq mövcuddur  `}</p>}
                </Form>
            </Formik>
        </div>
    )
}

export default Registration
