console.log("App component is loading");
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import { useState, useEffect } from "react";
import Footer from "../Footer/Footer.jsx";
import { defaultClothingItems } from "../../utils/clothingItems.js";
import { getWeather } from "../../utils/weatherApi.js";
import avatar from "../../assets/avatar.png";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function App() {
  const [weather, setWeather] = useState(null);
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");
  /*Tracks which modal is currently open ("preview" or "")*/
  const [selectedCard, setSelectedCard] = useState(null);
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  function handleOpenModal(modalName, card = null) {
    console.log("handleOpenModal fired:", modalName, card);
    setActiveModal(modalName);
    setSelectedCard(card);
  } /* Opens the selected modal and stores the clicked card data */

  const handleAddClick = () => {
    console.log("Add clothes clicked");
    setActiveModal("add-garment");
    console.log("setting activeModal to add-garment");
  };

  function handleAddGarmentSubmit(evt) {
    evt.preventDefault();

    console.log({
      name,
      imageUrl,
    });

    setName("");
    setImageUrl("");
    handleCloseModal();
  }
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
    }; /*Cleans up event listener when modal closes*/
  }, [activeModal]);
  /*Runs whenever activeModal changes*/

  useEffect(() => {
    console.log("useEffect running");

    getWeather().then((data) => {
      setWeather(data);
    });
  }, []);

  console.log("current activeModal:", activeModal);

  const isFormValid = name.trim() !== "" && imageUrl.trim() !== "";
  console.log("FORM STATE:", name, imageUrl, isFormValid);

  return (
    <>
      <div className="page">
        <div className="page__wrapper">
          <Header onAddClick={handleAddClick} />
          <Main
            weather={weather}
            clothingItems={clothingItems}
            onCardClick={handleOpenModal}
            onAddClick={handleAddClick}
          />
          <Footer />
        </div>
      </div>

      {/* ADD GARMENT MODAL */}
      {activeModal === "add-garment" && (
        <ModalWithForm
          title="New garment"
          name="add-garment"
          buttonText="Add garment"
          isOpen={true}
          onClose={handleCloseModal}
          isValid={isFormValid}
          onSubmit={handleAddGarmentSubmit}
        >
          <label className="modal__label">
            Name
            <input
              type="text"
              className="modal__input"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label className="modal__label">
            Image
            <input
              type="url"
              className="modal__input"
              placeholder="Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </label>

          <fieldset className="modal__fieldset">
            <legend className="modal__legend">Select the weather type:</legend>

            <div className="modal__radio-buttons">
              <label className="modal__radio-label">
                <input type="radio" name="weather" value="hot" />
                Hot
              </label>

              <label className="modal__radio-label">
                <input type="radio" name="weather" value="warm" />
                Warm
              </label>

              <label className="modal__radio-label">
                <input type="radio" name="weather" value="cold" />
                Cold
              </label>
            </div>
          </fieldset>
        </ModalWithForm>
      )}

      {/* PREVIEW MODAL */}
      {activeModal === "preview" && (
        <div className="modal modal_is-opened" onClick={handleCloseModal}>
          <div
            className="modal__content modal__content_type_preview"
            onClick={(evt) => evt.stopPropagation()}
          >
            <button
              type="button"
              className="modal__close-btn"
              onClick={handleCloseModal}
            >
              X
            </button>
            <img
              src={selectedCard?.link}
              alt={selectedCard?.name}
              className="modal__preview-image"
            />
            <div className="modal__footer"></div>
            <p className="modal__caption">{selectedCard?.name}</p>
            <p className="modal__weather">Weather: {selectedCard?.weather}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
