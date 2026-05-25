import { Card, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const DoctorServiceCards = ({ doctor }) => {
  if (!doctor) return null;

  const {
    _id,
    name = "No Name",
    specialty = "Not Provided",
    image,
    experience = "N/A",
    availability = "N/A",
    fee = 0,
  } = doctor;

  const imgSrc =
    image && image.startsWith("http")
      ? image
      : "/placeholder.png";

  return (
    <Card className="w-[320px] sm:w-[360px] shadow-lg rounded-lg overflow-hidden">

      {/* IMAGE */}
      <div className="relative h-[240px]">
        <Image
          src={imgSrc}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4 space-y-2">

        <h2 className="text-xl font-bold">{name}</h2>

        <p className="text-sm text-gray-500">{specialty}</p>

        <div className="flex justify-between text-sm">
          <span className="text-green-600">{experience}</span>
          <span className="text-orange-500 font-bold">
            ${fee}
          </span>
        </div>

        <p className="text-xs">{availability}</p>

        <Link href={`/all-appointment/${_id}`}>
          <Button className="w-full mt-3 bg-green-500 text-white">
            View Details
          </Button>
        </Link>

      </div>
    </Card>
  );
};

export default DoctorServiceCards;