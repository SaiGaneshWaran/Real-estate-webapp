import { Marker, Popup } from "react-leaflet";
import "./pin.scss";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function Pin({ item }) {
    if (!item.latitude || !item.longitude) {
        console.warn('Missing coordinates for item:', item);
        return null;
      }
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupContainer">
          <img src={item.picture} alt="" />
          <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom} bedroom</span>
            <b>$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}
Pin.propTypes = {
    item: PropTypes.shape({
      id: PropTypes.string.isRequired,
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      picture: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      bedroom: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
  };

export default Pin;