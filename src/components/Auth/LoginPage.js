import { useState } from "react";
import { login } from "./service";

function LoginPage({ onLogin }) {
  //creamos estado para comprobar cuando se introducen datos en el formulario
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(credentials);
    // Estoy logueado
    onLogin();
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
  const buttonDisabled = !credentials.email || !credentials.password;
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
        <button type="submit" disabled={buttonDisabled}>
          Log in
        </button>
        <input type="checkbox" name="savesesion" />
      </form>
    </div>
  );
}

export default LoginPage;
