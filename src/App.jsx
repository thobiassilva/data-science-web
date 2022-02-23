import "./App.css";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import Topbar from "./components/Topbar/Topbar";
import Infos from "./components/Infos/Infos";

function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <Header></Header>
      <Body></Body>
      <Infos></Infos>
    </div>
  );
}

export default App;
