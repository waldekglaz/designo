import { locations } from "@/constants/const";
import { LatLngTuple } from "leaflet";
import dynamic from "next/dynamic";

const DynamicMapCard = dynamic(() => import("@/components/MapCard/MapCard"), {
  ssr: false,
});

const Locations = () => {
  return (
    <div>
      {locations.map((location) => (
        <DynamicMapCard
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
