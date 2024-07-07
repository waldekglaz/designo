"use client";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

interface MapCardProps {
  position: LatLngTuple;
  id: string;
  name: string;
  street: string;
  city: string;
  phone: string;
  email: string;
  address: string;
}

const MapCard = ({
  position,
  id,
  name,
  street,
  city,
  phone,
  email,
  address,
}: MapCardProps) => {
  const zoom = 13;

  return (
    <div id={id.toLocaleLowerCase()} className="mb-10">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "320px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}></Marker>
      </MapContainer>
      <div className="text-center bg-hero-pattern bg-contain bg-center bg-no-repeat bg-[rgba(93,2,2,.1)] py-20 bg-origin-content">
        <h2 className="text-orange text-3xl mb-6">{name}</h2>
        <address className="not-italic">
          <div className=" leading-7 text-sm ">
            <h3 className="font-bold ">{address}</h3>
            {street} <br />
            {city}
          </div>
          <div className=" leading-7 text-sm ">
            <h3 className="font-bold">Contact Us</h3>
            {phone} <br />M : {email}
          </div>
        </address>
      </div>
    </div>
  );
};

export default MapCard;
