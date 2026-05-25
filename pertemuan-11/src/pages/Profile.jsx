import { useState } from "react";
import Navbar from "../components/navbar";
import { createData } from "../utils/api";

function Profile() {
  const [form, setForm] = useState({
    nama: "",
    email: ""
  })

  const handleChange = (event) => {
    setForm({...form, [event.target.name] : event.target.value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const data = await createData(form)
      console.log(data)
      alert("Data berhasil di simpan")
    } catch (error) {
      alert(error)
    }
  }

  return (
    <>
      <Navbar />
      <h2>Ini halaman profile</h2>

      <h2>Belajar POST API</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nama:</label>
        <input type="text" name="nama" value={form.nama} onChange={handleChange}/>
        <label htmlFor="">Email:</label>
        <input type="email" name="email" value={form.email} onChange={handleChange}/>
        <button type="submit">Kirim</button>
      </form>
    </>
  );
}

export default Profile;
