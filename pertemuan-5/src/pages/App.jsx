import "../styles/App.css";
import Hello from "../components/Hello";

function App() {
  return (
    <>
      <Hello name="Irwan" umur={23} kelas="Udah lulus boss" />
      <Hello name="Havidz" umur={17} kelas={10} />
      <Hello name="Farros" umur={17} kelas={10}/>
    </>
  );
}

export default App;
