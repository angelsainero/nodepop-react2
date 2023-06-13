import { useState } from "react";
import "./App.css";
import LoginPage from "./components/Auth/LoginPage";
import "./components/adverts/AdvertsPage";
import AdvertsPage from "./components/adverts/AdvertsPage";
import NewAdvertPage from "./components/adverts/NewAdvertPage";
import { Route, Routes, Navigate } from "react-router-dom";
import AdvertPage from "./components/adverts/AdvertPage";

function App({ isInitillyLogged }) {
  //definimos aqui el estado en vez de en loginpage porque necesitamos también usarlo aqui y no podemos pasarlo de abajo a arriba
  const [isLogged, setIsLogged] = useState(isInitillyLogged);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
  };

  return (
    <div className="paper">
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />

        <Route
          path="/adverts"
          element={<AdvertsPage onLogout={handleLogout} isLogged={isLogged} />}
        />
        <Route
          path="/adverts/:id"
          element={<AdvertPage onLogout={handleLogout} isLogged={isLogged} />}
        />
        <Route
          path="/adverts/new"
          element={
            <NewAdvertPage onLogout={handleLogout} isLogged={isLogged} />
          }
        />
        <Route path="/" element={<Navigate to="/adverts" />} />
        <Route path="/404" element={<div>404 || Not Found</div>} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
