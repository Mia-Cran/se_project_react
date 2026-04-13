import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  return (
    <li className="item__card">
      <p className="item__card-title">{item.name}</p>
      <img
        src={item.link}
        alt={item.name}
        className="item__card-img"
        onClick={() => {
          console.log("IMAGE CLICKED");
          onCardClick("preview", item);
        }}
       />
      </li>
  );
}
export default ItemCard;
