import { login } from "./service";

function LoginPage() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await login({
      email: event.target.email.value,
      password: event.target.password.value,
    });
    console.log(response)
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
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default LoginPage;
