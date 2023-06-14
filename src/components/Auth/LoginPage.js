import { useState } from "react";
import { login } from "./service";
import Button from "../shared/button";
import { useLocation, useNavigate } from "react-router-dom";


function LoginPage({ onLogin }) {
  const navigate = useNavigate();
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  //creamos estado para comprobar cuando se introducen datos en el formulario
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [keepSession, setKeepSession] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true)
    try {
      await login(credentials, keepSession);
      setIsLoading(false)
      // Estoy logueado
      onLogin();
      //redirect
      const to = location.state?.from?.pathname || '/';
      navigate(to)
      
    } catch (error) {      
      setIsLoading(false)
      setError(error)
      return;
    }
    

  };
  //se ha introducido datos en el formulario
  const handleChange = (event) => {
    //cuando el evento lo dispare username, creamos nuevo objeto (para eso es el ...credentials) y
    // le sobreescribe la propiedad username

    // if (event.target.name === "email") {
    //   setCredentials({ ...credentials, email: event.target.value });
    // }
    // if (event.target.name === "password") {
    //   setCredentials({ ...credentials, password: event.target.value });
    // }
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleKeepSessionChange = (event) => {
    setKeepSession(event.target.checked); //
  };

  const buttonDisabled = !credentials.email || !credentials.password || isLoading ;
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>Log in to NodePop</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={credentials.email}
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={credentials.password}
        />
        <Button type="submit" disabled={buttonDisabled}>
          Log in
        </Button>
        <input
          type="checkbox"
          name="check"
          onChange={handleKeepSessionChange}
          checked={keepSession}
        />
      </form>
      {
        error && <div>{error.message}</div>
      }
    </div>
  );
}

export default LoginPage;
