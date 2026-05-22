import { Card, Avatar, Button } from "@heroui/react";
import Image from "next/image";

const DoctorServiceCards = ({doctor}) => {
  const { name, specialty, image, experience, availability, description, hospital, location, fee } = doctor || {};
  return (
    <div>
        <Card className="group w-[320px] sm:w-[360px]  rounded border border-white/10 text-black shadow-2xl ">
  
  {/* Image Section */}
  <div className="relative h-[250px] overflow-hidden">
    <Image
      alt={name}
      className="h-full w-full object-cover object-top"
     
      height={200}
      width={200}
      src={image} 
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

    {/* Specialty Badge */}
    <div className="absolute top-4 left-4 rounded-full border border-cyan-400/30 bg-cyan-500/20 px-4 py-1 backdrop-blur-md">
      <p className="text-xs justify-end font-semibold tracking-wide text-orange-300">
        Top Rated
      </p>
    </div>
  </div>

  {/* Content */}
  <div className="space-y-4 p-5">

    {/* Doctor Info */}
    <div className="flex items-center gap-3">
     
      <div>
        <h4 className="text-sm font-semibold text-black">
         {name}
        </h4>
        <p className="text-xs text-gray-400">
         {specialty}
        </p>
      </div>
    </div>

    
  

    {/* Stats */}
   <div className="flex justify-between ">
     <div>
      <h1 className=" text-green-500">{experience}</h1>
    </div>
    
    <div>
        <h1 className="text-orange-500 font-bold">${fee}</h1>
      </div>
   </div>

     {/* Card Title */}
    <div>
        <Card.Title className="text-2xl font-bold tracking-tight text-black">
        {name}
      </Card.Title>


   
    </div>

    <div className="flex justify-between">
      <h1>{availability}</h1>
    </div>

    {/* Button */}
    <Button className="h-11 w-full rounded-2xl bg-green-500 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-400">
      View Details
    </Button>
  </div>
</Card>
    </div>
  );
};

export default DoctorServiceCards;