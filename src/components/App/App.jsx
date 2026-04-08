console.log("App component is loading");
import './App.css';
import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx'
import { useState } from "react";
import Footer from "./Footer/Footer.jsx";
import { defaultClothingItems } from '../../utils/constants.js';

function App() {
  const [weather, setWeather] = useState(null);
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");

  function handleOpenModal() {
  setActiveModal("preview")
}
  return (
    <div className="page">
      <Header />
      <Main weather={weather} 
       clothingItems={clothingItems} 
       onCardClick={handleOpenModal}
       />

       {activeModal === "preview" && (
         <div className="modal modal_is-opened">
          <div className="modal__content">
            <button type="button">X</button>
            <p>Preview modal is open</p>
            </div>
            </div>
       )}

      <Footer />
    </div>
  );
}



export default App

/* line 21-23: variable that tracks "which modal is open?"*/
