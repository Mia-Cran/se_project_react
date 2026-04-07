console.log("App component is loading");
import './App.css';
import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx'
import '../../utils/constants.js';
import { useState } from "react";
import Footer from "./Footer/Footer.jsx";


function App() {
  const [weather, setWeather] = useState(null);
  return (
    <div className="page">
      <Header />
      <Main weather={weather}/>
      <Footer />
    </div>
  );
}



export default App

