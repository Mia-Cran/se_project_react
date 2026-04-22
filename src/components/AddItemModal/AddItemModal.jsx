import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";
import useForm from "../../hooks/useForm";

function AddItemModal({ isOpen, onClose, onSubmit }) {
    const [weather, setWeather] = useState("");

    const { values, handleChange, resetForm } = useForm({
      name: "",
      imageUrl: "",
  });

  useEffect(() => {
    if (isOpen) {
    resetForm();
    setWeather("");
    }
  }, [isOpen, resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();

   onSubmit(
  {
    name: values.name,
    imageUrl: values.imageUrl,
    weather,
  },
  () => {
    resetForm();
    setWeather("");
  }
);
};  

  const isFormValid = 
    values.name.trim() !== "" &&
    values.imageUrl.trim() !== "" &&
    weather !== "";


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
          name="name"
          className="modal__input"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
        />
      </label>

      <label className="modal__label">
        Image
        <input
          type="url"
          name="imageUrl"
          className="modal__input"
          placeholder="Image URL"
          value={values.imageUrl}
          onChange={handleChange}
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
