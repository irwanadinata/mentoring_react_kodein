import { useState } from "react";
import Navbar from "../components/navbar";
import { updateData } from "../utils/api";

function Contact() {
  const [form, setForm] = useState({
    id: "",
    nama: "",
    email: "",
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      const response = await updateData(form.id, {
        nama: form.nama,
        email: form.email,
      });
      console.log(response);
      alert("Data berhasil diupdate");

      //untuk mengosongkan form
      setForm({
        id: "",
        nama: "",
        email: "",
      });

    } catch (error) {
      alert("Data gagal diupdate");
    }
  };

  return (
    <>
      <Navbar />
      <h2>Ini halaman Contact</h2>
      <h2>Belajar PUT/update API</h2>
      <form onSubmit={handleUpdate}>
        <label htmlFor="">ID :</label>
        <input type="text" name="id" value={form.id} onChange={handleChange} />

        <label htmlFor="">Nama :</label>
        <input
          type="text"
          name="nama"
          value={form.nama}
          onChange={handleChange}
        />

        <label htmlFor="">Email :</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <button type="submit">Update</button>
      </form>
    </>
  );
}

export default Contact;
