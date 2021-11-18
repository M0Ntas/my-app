import "./App.css";
import Header from "./Components/Header/Header-index.jsx";
import Main from "./Components/Main/Main-index.jsx";
import Footer from "./Components/Footer/Footer-index.jsx";
import {scryRenderedDOMComponentsWithClass} from "react-dom/test-utils";

const App = () => {
  return (
    <div>
      <Header name={'test1'}/>
      <Main />
      <Footer />
    </div>
  );
};

export default App;


