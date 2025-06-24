import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for missing marker icons in Leaflet
let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

const OPENWEATHERMAP_API_KEY = "2da26b001ff090e2c17591d5682d8915";

const Mapbox = ({ lat, lon }) => {
    return (
        <div style={{ height: "300px", width: "100%", borderRadius: "10px", overflow: "hidden" }}>
            <MapContainer
                center={[lat, lon]}
                zoom={5}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
            >
                {/* Base Map */}
                <TileLayer
                    attribution='&copy; OpenStreetMap'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* OpenWeatherMap Temperature Layer */}
                <TileLayer
                    attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                    url={`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${OPENWEATHERMAP_API_KEY}`}
                />

                <Marker position={[lat, lon]}>
                    <Popup>You're here</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Mapbox;
