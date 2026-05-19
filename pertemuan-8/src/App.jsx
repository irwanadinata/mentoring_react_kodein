import "./App.css";
import { useState } from "react";

function App() {
  // const [nama, setNama] = useState("");
  const [ketik, setKetik] = useState("");

  // const handleClick = () => {
  //   alert("Helloowwww");
  // };

  // const handleChange = (event) => {
  //   setNama(event.target.value);
  // };

  const handleSubmit = (event) => {
    event.preventDefault() //supaya halaman tidak reload/refresh
    alert(`ketikan dari user adalah: ${ketik}`)
  };

  const handleChange = (event) => {
    setKetik(event.target.value)
  };

  return (
    <>
      <h2>Belajar event handler</h2>
      {/* <button onClick={() => handleClick()}>Klik Saya</button>
      <input
        type="text"
        name="nama"
        value={nama}
        onChange={() => handleChange(event)}
      />
      <h2>{nama}</h2> */}

      <form onSubmit={handleSubmit}>
        <input type="text" name="ketik" value={ketik} onChange={handleChange} />
        <button>Submit</button>
      </form>
      <p>{ketik}</p>
    </>
  );
}

export default App;
