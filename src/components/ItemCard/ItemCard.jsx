import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  return (
    <div className="item__card">
      <p className="item__card-title">{item.name}</p>
      <img
        src={item.link}
        alt={item.name}
        className="item__card-img"
        onClick={() => {
          console.log("clicked");
          onCardClick("preview", item);
        }}
      />
      
    </div>
  );
}
export default ItemCard;
