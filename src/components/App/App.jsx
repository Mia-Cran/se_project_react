import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import { useState, useEffect } from "react";
import Footer from "../Footer/Footer.jsx";
import { defaultClothingItems } from "../../utils/clothingItems.js";
import { getWeather } from "../../utils/weatherApi.js";
import ItemModal from "../ItemModal/ItemModal";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import Profile from "../Profile/Profile";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddItemModal from "../AddItemModal/AddItemModal";

const currentUser = {
  name: "Terrence Tegegne",
};

function App() {
  const [weather, setWeather] = useState(null);
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");
  /*Tracks which modal is currently open ("preview" or "")*/
  const [selectedCard, setSelectedCard] = useState(null);
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isFahrenheit, setIsFahrenheit] = useState(true);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  function handleOpenModal(modalName, card = null) {
    setActiveModal(modalName);
    setSelectedCard(card);
  } /* Opens the selected modal and stores the clicked card data */


  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  function handleAddGarmentSubmit(newItem) {
    const itemToAdd = {
    _id: crypto.randomUUID(),
    name: newItem.name,
    weather: newItem.weather,
    link: newItem.imageUrl,
    };

     console.log("FINAL ITEM:", itemToAdd);

   setClothingItems((prevItems) => [itemToAdd, ...prevItems]);
    handleCloseModal();
    setName("");
    setImageUrl("");
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

    console.log(clothingItems);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    }; /*Cleans up event listener when modal closes*/
  }, [activeModal]);
  /*Runs whenever activeModal changes*/

  useEffect(() => {
    getWeather()
      .then((data) => {
        setWeather(data);
      })
      .catch((err) => {
        console.error("Weather fetch failed:", err);
      });
  }, []);

  const isFormValid = 
     name.trim() !== "" && imageUrl.trim() !== "" && weather !=="";  

  return (
    <BrowserRouter>
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{
            currentTemperatureUnit,
            handleToggleSwitchChange,
          }}
        >
          <CurrentUserContext.Provider value={currentUser}>
            <div className="page__wrapper">
              <Header onAddClick={handleAddClick} city={weather?.city} />

              <Routes>
                <Route
                  path="/"
                  element={
                    <Main
                      weather={weather}
                      clothingItems={clothingItems}
                      onCardClick={handleOpenModal}
                    />
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <Profile
                      weather={weather}
                      clothingItems={clothingItems}
                      onCardClick={handleOpenModal}
                      onAddClick={handleAddClick}
                    />
                  }
                />
              </Routes>

              <Footer />
            </div>
          </CurrentUserContext.Provider>
        </CurrentTemperatureUnitContext.Provider>
      </div>

      {/* ADD GARMENT MODAL */}
      <AddItemModal
        isOpen={activeModal === "add-garment"}
        onClose={handleCloseModal}
        onSubmit={handleAddGarmentSubmit}
        isValid={isFormValid}
        name={name}
        imageUrl={imageUrl}
        setName={setName}
        setImageUrl={setImageUrl}
      />
      {/* PREVIEW MODAL */}
      {activeModal === "preview" && (
        <ItemModal card={selectedCard} onClose={handleCloseModal} />
      )}
    </BrowserRouter>
  );
}

export default App;
