import { MapContainer, TileLayer } from 'react-leaflet'
import './map.scss'
import "leaflet/dist/leaflet.css";
import Pin from '../pin/Pin';
import PropTypes from 'prop-types';

function Map({items}){
  return (
    <MapContainer center={[52.4797, -1.90269]} zoom={7} scrollWheelZoom={false} className='map'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {items.map(item=>(
      <Pin item={item} key={item.id}/>
    ))}
  </MapContainer>
  )
}
Map.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        bedrooms: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        tenure: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        latitude: PropTypes.number.isRequired,  // Add this
        longitude: PropTypes.number.isRequired, // Add this
        added: PropTypes.shape({
          month: PropTypes.string.isRequired,
          day: PropTypes.number.isRequired,
          year: PropTypes.number.isRequired,
        }).isRequired,
      })
    ).isRequired,
  };

export default Map