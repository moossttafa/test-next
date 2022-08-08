import Image from "next/image"

function DestinationImage({image , isHover , InActive ,index}) {
  return (
    <div className="destinations-image"> 
    {isHover && InActive == index &&
      <div className="image-wrapper">
        <Image src={image}
          alt="Pepole" 
          objectFit="cover " 
          layout="fill"   
        />
      </div>   
    }
  </div> 
  );
}

export default DestinationImage;