import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import {Routes,Route} from "react-router-dom";
import Bg from './Bg'

function App() {
  return (
  <>
   <Header />
   <Bg/>
   <Routes>
     <Route path='/' element={<Cards />} />
     <Route path='/cart/:id' element={<CardsDetails />} />
   </Routes>
  </>
  );
}


export default App;
