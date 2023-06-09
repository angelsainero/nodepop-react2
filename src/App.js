import { useState } from 'react';
import './App.css';
import LoginPage from './components/Auth/LoginPage';
import './components/adverts/AdvertsPage'
import AdvertsPage from './components/adverts/AdvertsPage';



function App() {
  //definimos aqui el estado en vez de en loginpage porque necesitamos también usarlo aqui y no podemos pasarlo de abajo a arriba
  const [isLogged, setIsLogged] = useState(false);
  
  return (
    <div className="paper">
      {isLogged ? <AdvertsPage /> : <LoginPage setIsLogged={setIsLogged}/>}
      
    </div>
  );
}

export default App;
