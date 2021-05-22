import logo from './logo.svg';
import './App.css';

// Components
import Homepage from './containers/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



// Additional
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {




  return (
    <Router>
    <div className="App">
      <Navbar/>
        <div className='mainCont'>
          <Switch>
            <Route path="/single-game">
              {/* <About /> */}
            </Route>
            <Route path="/member-area">
              {/* <Users /> */}
            </Route>
            <Route path="/">
              <Homepage/>
            </Route>
          </Switch>
        </div>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
