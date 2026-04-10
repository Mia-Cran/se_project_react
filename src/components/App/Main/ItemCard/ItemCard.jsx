function ItemCard({ item, onCardClick }) {
  return (
    <div>
    <button onClick={() => console.log("clicked")}>
      test click
    </button>
     <img
      src={item.imageUrl}
      alt={item.name}
      style={{ cursor: "pointer" }}
      onClick={() => {
        console.log("clicked");
        onCardClick("preview", item);
      }}
      />
      <p>{item.name}</p>
      </div>
  );
}
export default ItemCard;
