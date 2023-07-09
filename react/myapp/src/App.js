import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Form from "./components/Form";

function App() {
  return (
    <>
      {/* <Navbar title = "Mohit"/> */}
      <Navbar />
      
      <div className="container my-5 border text-dark p-5">

      <Form  title = "Please Fill Your Form Below" />

      </div>

      <Footer />
    </>
  );
}

export default App;
