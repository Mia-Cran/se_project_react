import ItemCard from "../ItemCard/ItemCard"
import "./ClothesSection.css";

function ClothesSection({ clothingItems, onCardClick, onAddClick }) {
    return (
    <div className="clothes-section">
        <button type="button" className="clothes-section__add-btn" onClick={onAddClick}>
            + Add New
        </button>
        <ul className="clothes-section__items">
            {clothingItems.map((item) => (
                <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
            ))}  
        </ul>
    </div>
   );
}

export default ClothesSection;