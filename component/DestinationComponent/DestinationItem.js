import { useState } from "react";
import DestinationImage from "./DestinationImage";

function DestinationItem({DestinationsData}) {
  const [isHover, setIsHover] = useState(false)
  const [InActive, setInActive] = useState(false)
  const handelChange = (state , index) => {
    setIsHover(state)
    setInActive(index)
  } 
  return (
    <div className="destinations-data-wrapper">
      {DestinationsData.map((data , index) => (
        <div 
        onMouseEnter={() => handelChange(true , index)}
        onMouseLeave={() => handelChange(false , index)} 
        key={index}
        className={isHover && InActive == index ? "destinations-data active" : "destinations-data "}   
      >
        <div className="number-wrapper">
          <span>{data.id}</span>
        </div>
        <div className="destinations-info">
          <h3>{data.name}</h3>
          <p>{data.info}</p>
        </div>   
        <DestinationImage  image={data.Image} isHover={isHover} index={index} InActive={InActive}/>
       </div> 
      ))}
    </div>
  );
}

export default DestinationItem;