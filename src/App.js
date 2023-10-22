
import './App.css';
import NavBar from './Components/NavBar';
import Settings from './Components/Settings';
import Profile from './Components/Profile';
import Carousel from './Components/Carousel';
import Accordion_GoBhojan from './Components/Accordion_GoBhojan';
import Card_GoBhojan from './Components/Card_GoBhojan';
import Card_List from './Components/Card_List';



function App() {
  return (
    <div>
    <NavBar />
     <Carousel />
     <Accordion_GoBhojan><Card_List></Card_List></Accordion_GoBhojan>
     <Card_List>
      <Card_List></Card_List>
     </Card_List>
     

      </div>
  );
}

export default App;
