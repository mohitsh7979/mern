import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Home from "./components/Home";

function App() {
  return (
    <>
      {/* <Navbar title = "Mohit"/> */}
      <Navbar />
      
      <div className="container my-5 border text-dark p-5">

      <Form  title = "Please Fill Your Form Below" />

      </div>

      <Footer text = {{name:'mohit'}} data = "I am from Jaipur"  />

      <Home text = "class" />
      
    </>
  );
}

export default App;
