import { useState } from "react";
import { login } from "./service";


function LoginPage({setIsLogged}) {
 

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login({
      email: event.target.email.value,
      password: event.target.password.value,
    });
    // Estoy logueado
    setIsLogged(true);
  };
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>Log in to NodePop</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" />
        <input type="password" name="password" />
        <button type="submit" disabled={setIsLogged}>Log in</button>
      </form>
    </div>
  );
}

export default LoginPage;
