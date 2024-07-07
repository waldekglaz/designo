import { locations } from "@/constants/const";
import MapCard from "@/components/MapCard/MapCard";
import { LatLngTuple } from "leaflet";

const Locations = () => {
  return (
    <div>
      {locations.map((location) => (
        <MapCard
          key={location.name}
          position={[location.position[0], location.position[1]] as LatLngTuple}
          id={location.href.split("#")[1]}
          name={location.name}
          street={location.street}
          city={location.city}
          phone={location.phone}
          email={location.email}
          address={location.address}
        />
      ))}
    </div>
  );
};

export default Locations;
