import "./App.css";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import Topbar from "./components/Topbar/Topbar";
import { Infos } from "./components/Infos/Infos";
import { Footer } from "./components/Footer/Footer/Footer";
import { Contact } from "./components/Contact/Contact";


function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <Header></Header>
      <Body></Body>
      <Infos></Infos>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
