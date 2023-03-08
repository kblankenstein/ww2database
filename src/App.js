import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Joe Noyes Crew</h1>
        <h4>May we never forget these ten airmen.</h4>
      </header>
      <MapContainer center={[52.3113295, 1.2122331]} zoom={17} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[52.3113295, 1.2122331]}>
          <Popup>
            The 95th Bomb Group (H) was <br /> based at Horham, England.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
