function ItemCard({ item, onCardClick }) {
  return (
    <div
      onClick={() => {
        alert("card clicked");
        onCardClick("preview", item);
      }}
    >
      <img src={item.imageUrl} alt={item.name} />
      <p>{item.name}</p>
    </div>
  );
}

export default ItemCard;
