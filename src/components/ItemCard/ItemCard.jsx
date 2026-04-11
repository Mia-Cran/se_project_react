import "./ItemCard.css"

function ItemCard({ item, onCardClick }) {
  return (
    <div className="item__card">
      <img
        src={item.link}
        alt={item.name}
       className="item__card-img"
        onClick={() => {
          console.log("clicked");
          onCardClick("preview", item);
        }}
      />
      <p className="item__card-title">{item.name}</p>
    </div>
  );
}
export default ItemCard;
