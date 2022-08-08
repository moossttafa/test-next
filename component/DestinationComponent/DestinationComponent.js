import {DestinationsData} from "../DummyData/data"
import DestinationItem from "./DestinationItem";

function DestinationComponent() {
  return (
    <div className="destination-wrapper">
        <DestinationItem DestinationsData={DestinationsData} />
    </div>
  );
}

export default DestinationComponent;