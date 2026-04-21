import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";


function AddItemModal({
  isOpen,
  onClose,
  onSubmit,
  isValid,
  name,
  imageUrl,
  setName,
  setImageUrl,
}) {

    const [weather, setWeather] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit ({
            name,
            imageUrl,
            weather,
        });

        setWeather={setWeather}
    };

    const isFormValid = name.trim() !== "" && imageUrl.trim() !== "" && weather !== "";

  return (
    <ModalWithForm
      title="New garment"
      name="add-garment"
      buttonText="Add garment"
      isOpen={isOpen}
      onClose={onClose}
      isValid={isFormValid}
      onSubmit={handleSubmit}
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
            <input 
              type="radio" 
              name="weather" 
              value="hot" 
              checked={weather === "hot"}
              onChange={(e) => setWeather(e.target.value)}
              />
              Hot
          </label>

          <label className="modal__radio-label">
            <input 
             type="radio" 
             name="weather" 
             value="warm" 
             checked={weather === "warm"}
             onChange={(e) => setWeather(e.target.value)}
             />
            Warm
          </label>

          <label className="modal__radio-label">
            <input 
             type="radio" 
             name="weather" 
             value="cold" 
             checked={weather === "cold"}
             onChange={(e) => setWeather(e.target.value)}
            />
            Cold
          </label>
        </div>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
