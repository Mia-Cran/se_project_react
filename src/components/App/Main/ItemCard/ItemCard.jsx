function ItemCard({ item, onCardClick }) {
  return (
    <div onClick={onCardClick}>
      <img src={item.imageUrl} alt={item.name} />
      <p>{item.name}</p>
    </div>
  );
}

export default ItemCard;
