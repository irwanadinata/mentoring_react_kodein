import Navbar from "../components/navbar";
import "../styles/App.css";
import { getData } from "../utils/api";
import { useEffect, useState } from "react";

function Home() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const data = await getData();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <Navbar />
      <h2>Ini adalah halaman Home</h2>
      <div>
        {users.map((user, index) => (
          <>
          <div>----------------------</div>
          <div key={index}>
            <p>Nama: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email:{user.email}</p>
          </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Home;
