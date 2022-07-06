/* eslint-disable quotes */
// == Import
import Header from "../Header/Header";
import Meme from "../Meme/Meme";
import "./styles.css";

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Meme />
    </div>
  );
}

// == Export
export default App;
