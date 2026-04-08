import "./Main.css";
import ItemCard from "./ItemCard/ItemCard";

function Main({ weather, clothingItems, onCardClick }) {
  return (
    <div className="container">
      <p>This is your first Vite Project.</p>
      <p>"Vite" means "quick" in French</p>

      <div> {clothingItems.map((item) => ( 
            <ItemCard key={item._id} 
             item={item} 
             onCardClick={onCardClick}
            /> 
            ))} 
      </div>
    </div>
  );
}

export default Main;
/* lines 11-15 says: Go through every clothing item and create an Itemcard for each one */