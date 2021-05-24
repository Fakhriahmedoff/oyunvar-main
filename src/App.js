import logo from './logo.svg';
import './App.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Components
import Homepage from './containers/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SingleGame from './containers/SingleGame';
import Benefit from './components/Benefit';


// İmages
import benefitCard1 from './assets/images/benefit1.png'
import benefitCard2 from './assets/images/benefit2.png'
import benefitCard3 from './assets/images/benefit3.png'
import benefitCard4 from './assets/images/benefit4.png'
import GamesIcon from '@material-ui/icons/Games';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import slider1 from './assets/images/slider1.jpg'
import slider2 from './assets/images/slider2.jpg'
import { useLocation } from 'react-router-dom';


// Additional
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { useEffect } from 'react';



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
      <button
      className='nextBtn'
      onClick={onClick}
      >          
          <ChevronRightIcon/>
      </button>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className="prevBtn"
      onClick={onClick}
    >
        <ChevronLeftIcon/>
        </button>
  );
}


function App() {

    // Slider Settings
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow/> ,
      prevArrow: <SamplePrevArrow/>
    };

    const location = useLocation();



  return (
    <div className="App">
      <Navbar/>
         
         { 
          location.pathname === '/' && 
          <div className="slider">
              <Slider {...settings}>
                  <div>
                      <img src={slider1} width='100%' height='auto' className='sliderElement sliderElement1'></img>
                  </div>
                  <a href='google.com'>
                      <img src={slider2} width='100%' height='auto' className='sliderElement sliderElement2'></img>
                  </a>
              </Slider> 
            </div>
            }

        <div className='mainCont'>
          <Switch>
            <Route path="/games/:id">
              <SingleGame />
            </Route>
            <Route path="/member-area">
              {/* <Users /> */}
            </Route>
            <Route path="/">
              <Homepage/>
            </Route>
          </Switch>
        </div>

      
      <div className='benefitsCont'>
        {/* <div className="benefitsTitle"><div className="gamesTitleInside"><p className='textTitle'><GamesIcon/> BENEFITS</p></div></div> */}
        <div className="benefits">
                <Benefit image={benefitCard1} text="TEST"/>
                <Benefit image={benefitCard2} text="TEST"/>
                <Benefit image={benefitCard3} text="TEST"/>
                <Benefit image={benefitCard4} text="TEST"/>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
