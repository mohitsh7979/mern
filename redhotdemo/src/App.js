import logo from "./logo.svg";
import "./App.css";
import Searchbar from "./Components/Searchbar";
import Navstar from "./Components/Navstar";
import Carousel from "./Components/Carousel";
import Propertycart from "./Components/Propertycart";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Agesnts from "./Components/Agesnts";
import NewsStar from "./Components/NewsStar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Searchbar />
      <Navstar />
      <Carousel />
      <Propertycart />
      <Agesnts />
      <NewsStar />
      <Footer />
    </>
  );
}

export default App;
