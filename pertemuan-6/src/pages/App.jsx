import Button from "../components/button";
import Input from "../components/input";
import "../styles/App.css";
import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(form)
    alert(`Hallo user dengan email: ${form.email} dan password: ${form.password}`);
  };

  return (
    <>
      <form>
        <Input
          label="email"
          name="email"
          value={form.email}
          type="email"
          onChange={handleChange}
          placeholder="Masukan email anda"
        />

        <Input
          label="password"
          name="password"
          value={form.password}
          type="password"
          onChange={handleChange}
          placeholder="Masukan password anda"
        />

        <Button type="submit" onClick={handleClick}>
          Login
        </Button>
      </form>
    </>
  );
}

export default App;
