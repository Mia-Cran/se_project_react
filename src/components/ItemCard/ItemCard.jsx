import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  return (
    <li className="item__card">
      <p className="item__card-title">{item.name}</p>
      <img
        src={item.link}
        alt={item.name}
        className="item__card-img"
        onLoad={() => console.log("IMAGE LOADED:", item.link)}
        onError={() => console.log("IMAGE FAILED:", item.link)}
        onClick={() => {
          onCardClick("preview", item);
        }}
      />
    </li>
  );
}
export default ItemCard;
