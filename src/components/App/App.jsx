console.log("App component is loading");
import './App.css';
import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx'
import { useState, useEffect } from "react";
import Footer from "./Footer/Footer.jsx";
import { defaultClothingItems } from '../../utils/constants.js';

function App() {
  const [weather, setWeather] = useState(null);
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");
  /*Tracks which modal is currently open ("preview" or "")*/
  const [selectedCard, setSelectedCard] = useState(null);

  function handleOpenModal(modalName, card = null) {
  console.log("handleOpenModal fired:", modalName, card);
  setActiveModal(modalName)
  setSelectedCard(card);
  } /* Opens the selected modal and stores the clicked card data */

  function handleCloseModal() {
    setActiveModal("");
    setSelectedCard(null);
    /* Closes the modal and clears the selected card */
  } /*Closes any open modal by resetting activeModal*/

  useEffect(() => {
    if (!activeModal) return;
    /*Only run this effect if a modal is open*/

    function handleEscape(evt) {
      if (evt.key === "Escape") {
        handleCloseModal();
      }
    } /*Closes modal when Escape key is pressed*/


   document.addEventListener("keydown", handleEscape);
   /*Starts listening for Escape key*/

   return () => {
    document.removeEventListener("keydown", handleEscape);
   };/*Cleans up event listener when modal closes*/
  }, [activeModal]);
     /*Runs whenever activeModal changes*/

  return (
    <div className="page">
      <Header onAddClick={() => handleOpenModal("add-garment")}/>
      <Main weather={weather} 
       clothingItems={clothingItems} 
       onCardClick={handleOpenModal}
       />

       <p>activeModal: {activeModal}</p>

       {activeModal === "preview" && (
        <>
        {/*Only render modal when activeModal is "preview"*/}
         <div className="modal modal_is-opened" onClick={handleCloseModal}
         > 
         {/*Closes modal when clicking outside content */}

          <div className="modal__content" 
               style={{ backgroundColor: "red", padding: "20px" }}
               onClick={(evt) => evt.stopPropagation()}
            >
             {/* Prevents modal from closing when clicking inside */}
            <button type="button" onClick={handleCloseModal}>
              X</button>
               {/* Closes modal when X is clicked */}
            <img src={selectedCard?.imageUrl} alt={selectedCard?.name} />
            <p>{selectedCard?.name}</p>
            </div>
          </div>
          </>
       )}
       
       {activeModal === "add-garment" && (
  <>
    <div className="modal modal_is-opened" onClick={handleCloseModal}>
      <div
        className="modal__content"
        onClick={(evt) => evt.stopPropagation()}
      >
        <button type="button" onClick={handleCloseModal}>
          X
        </button>
        <p>Add garment modal is open</p>
      </div>
    </div>
  </>
)}

      <Footer />
    </div>
  );
}



export default App


