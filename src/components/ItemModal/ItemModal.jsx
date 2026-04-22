import "./ItemModal.css";

function ItemModal({ card, onClose, onDelete }) {
  if (!card) return null;

  return (
    <div className="modal modal_is-opened" onClick={onClose}>
      <div
        className="modal__content modal__content_type_preview"
        onClick={(evt) => evt.stopPropagation()}
      >
        <button
          type="button"
          className="modal__close-btn"
          onClick={onClose}
          aria-label="Close"
        />

        <img src={card.link} alt={card.name} className="modal__preview-image" />

        <div className="modal__footer">
          <p className="modal__caption">{card.name}</p>
          <p className="modal__weather">Weather: {card.weather}</p>
          <button onClick={() => onDelete(card)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
