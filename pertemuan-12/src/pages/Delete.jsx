import { useState } from "react";
import { deleteData } from "../utils/api";
import Navbar from "../components/navbar";

function Delete() {
    const [id, setId] = useState("67")

    const handleChange = (event) => {
        setId(event.target.value)
    }

    const handleDelete = (id) => {
        try {
            deleteData(id)
            alert("Data Berhasil diHapus")
        } catch (error) {
            console.log(error)
            alert("Data Gagal diHapus")
        }
    }

  return (
    <>
      <Navbar/>
      <h2>Belajar DELETE API</h2>

      <label htmlFor="">ID:</label>
      <input type="text" onChange={handleChange} />
      <button type="submit" onClick={() => handleDelete(id)}>Hapus</button>
    </>
  );
}

export default Delete;
