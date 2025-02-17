import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import DOMPurify from "dompurify"; // Import DOMPurify for sanitization
import "./card.scss";

function Card({ item, onSave, onRemove }) {
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveToggle = () => {
    const savedProperties = JSON.parse(localStorage.getItem("favourites")) || [];
  
    if (!isSaved) {
      // Save the property
      setIsSaved(true);
      if (onSave) {
        onSave(item);
      }
      savedProperties.push(item);
      localStorage.setItem("favourites", JSON.stringify(savedProperties));
      alert(`${item.type} has been added to your favorites. You can view it in your profile page.`);
    } else {
      // Remove the property
      setIsSaved(false);
      if (onRemove) {
        onRemove(item.id);
      }
      const updatedProperties = savedProperties.filter((property) => property.id !== item.id);
      localStorage.setItem("favourites", JSON.stringify(updatedProperties));
      alert(`${item.type} has been removed from your favorites.`);
    }
  };

  // Sanitize dynamic content
  const sanitizedDescription = DOMPurify.sanitize(item.description);

  return (
    <div className="card">
      <Link to={`/property/${item.id}`} className="imageContainer">
        <img src={item.picture} alt={item.type} />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/property/${item.id}`}>{item.type}</Link>
        </h2>
        <p className="address">
          <img src="/assets/pin.png" alt="Pin icon" />
          <span>{item.tenure}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="description">
          <div 
          className="truncatedText"
          dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
        </div>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/assets/bed.png" alt="Bed icon" />
              <span>{item.bedrooms} bedroom</span>
            </div>
            <div className="feature">
              <img src="/assets/pin.png" alt="Location icon" />
              <span>{item.location} location</span>
            </div>
          </div>
          <div className="icons">
            <div
              className={`icon ${isSaved ? "saved" : ""}`}
              onClick={handleSaveToggle}
              title={isSaved ? "Unsave Property" : "Save Property"}
            >
              <img
                src={isSaved ? "/assets/save-filled.png" : "/assets/save.png"}
                alt={isSaved ? "Unsave" : "Save"}
              />
            </div>
            {onRemove && (
              <button
                className="deleteButton"
                onClick={() => onRemove(item.id)}
                title="Remove Property"
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    tenure: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  onSave: PropTypes.func,
  onRemove: PropTypes.func,
};

export default Card;
