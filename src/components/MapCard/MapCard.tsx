"use client";
import dynamic from "next/dynamic";
import { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

// Dynamically import react-leaflet components with SSR disabled
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);

interface MapCardProps {
  position: LatLngTuple;
  id: string;
  name: string;
  street: string;
  city: string;
  phone: string;
  email: string;
  address: string;
  textLeft?: boolean;
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
  textLeft,
}: MapCardProps) => {
  const zoom = 16;

  return (
    <div
      id={id.toLocaleLowerCase()}
      className="mb-10 relative md:mb-32 lg:flex lg:gap-8 lg:mb-8"
    >
      <MapContainer
        center={position}
        zoom={zoom}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        dragging={false}
        touchZoom={false}
        zoomControl={false}
        className={`md:rounded-xl md:mb-8 lg:basis-1/3 h-[320px] w-full z-0 lg:h-[326px] lg:mb-0 ${
          textLeft && "order-1"
        }`}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}></Marker>
      </MapContainer>
      <div className="text-center bg-hero-pattern bg-contain bg-center bg-no-repeat bg-[rgba(93,2,2,.1)] py-20 bg-origin-content md:rounded-xl md:pl-16 lg:h-[326px] lg:basis-2/3">
        <h2 className="text-orange text-3xl mb-6 md:text-left md:text-3xl">
          {name}
        </h2>
        <address className="not-italic md:flex gap-16">
          <div className="leading-7 text-sm md:text-left">
            <h3 className="font-bold ">{address}</h3>
            {street} <br />
            {city}
          </div>
          <div className="leading-7 text-sm md:text-left">
            <h3 className="font-bold">Contact Us</h3>
            {phone} <br />
            M: {email}
          </div>
        </address>
      </div>
    </div>
  );
};

export default MapCard;
