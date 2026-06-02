import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/delete">Delete</Link>

      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/contact")}>Contact</button>
      <button onClick={() => navigate("/profile")}>Profile</button>
      <button onClick={() => navigate("/delete")}>Delete</button>
    </>
  );
}

export default Navbar;
