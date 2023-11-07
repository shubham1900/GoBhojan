
import './App.css';
import { Route, Switch, Redirect, BrowserRouter as Router, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Settings from './Components/Settings';
import Profile from './Components/Profile';
import Carousel from './Components/Carousel';
import Accordion_GoBhojan from './Components/Accordion_GoBhojan';
import Card_GoBhojan from './Components/Card_GoBhojan';
import Card_List from './Components/Card_List';
import Login from './Components/Login';
import { Auth0Provider } from '@auth0/auth0-react';


function App() {
  return (
    <Auth0Provider
        domain="dev-6vba5xgxywmtwzjl.us.auth0.com"
        clientId="AwJHJGoTOwP2WJTWDPujpxdBEoMFXWpB"
        redirectUri={window.location.origin}
      >
    <Router>
      
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>

    </Router>
    </Auth0Provider>
  );
}

export default App;
function Home(){
return(
  <>
  <Carousel />
  <Accordion_GoBhojan />
  {/* <Card_List /> */}
  </>
);
}
