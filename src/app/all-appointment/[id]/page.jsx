import Image from "next/image";
import Link from "next/link";

const DetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`http://localhost:8000/all-appointment/${id}`);
    const idData = await res.json();

    const {

        name,
        specialty,
        image,
        experience,
        description,
        hospital,
        location,
        fee
    } = idData;

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">

            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 max-w-4xl w-full p-6 md:p-8">


                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">


                    <div className="relative w-[280px] h-[280px] md:w-[300px] md:h-[300px] rounded-2xl overflow-hidden bg-[#73b4e6] flex items-end justify-center">
                        <Image
                            alt={name}
                            src={image}
                            width={300}
                            height={300}
                            className="object-cover w-full h-full"
                        />
                    </div>


                    <div className="flex-1 text-center md:text-left space-y-3 w-full">
                        <h1 className="text-2xl md:text-3xl font-bold text-slate-900">{name}</h1>


                        <p className="text-gray-500 font-medium text-sm md:text-base">
                            {description || "MBBS"}
                        </p>


                        <p className="text-gray-500 text-sm md:text-base pb-4 border-b border-dashed border-gray-200">
                            Specialties in {specialty}
                        </p>


                        <div className="pt-2">
                            <span className="text-xs text-gray-400 block mb-1">Working at</span>
                            <p className="font-semibold text-slate-800 text-sm md:text-base">
                                {hospital}, {location}
                            </p>
                        </div>


                        <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between border-t border-dashed border-gray-200 gap-2">
                            <span className="font-bold text-slate-800 text-sm md:text-base">Consultation Fee</span>
                            <div className="text-left sm:text-right">
                                <p className="text-blue-600 font-bold text-lg">
                                    Fee : {fee} <span className="text-xs text-gray-400 font-normal">(incl. Vat)</span>
                                </p>
                                <span className="text-xs text-gray-400 block">Per consultation</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

                    <div className="bg-slate-50/60 p-4 rounded-xl text-center">
                        <span className="text-xs text-gray-400 block mb-1">Total Experience</span>
                        <p className="font-bold text-slate-800 text-sm md:text-base">{experience}</p>
                    </div>


                    <div className="bg-slate-50/60 p-4 rounded-xl text-center">
                        <span className="text-xs text-gray-400 block mb-1">BMDC Number</span>
                        <p className="font-bold text-slate-800 text-sm md:text-base">84220</p>
                    </div>


                    <div className="bg-slate-50/60 p-4 rounded-xl text-center">
                        <span className="text-xs text-gray-400 block mb-1">Joined Doctime</span>
                        <p className="font-bold text-slate-800 text-sm md:text-base">26 Sep 2025</p>
                    </div>


                    <div className="bg-slate-50/60 p-4 rounded-xl text-center">
                        <span className="text-xs text-gray-400 block mb-1">Total Rating (6512)</span>
                        <p className="font-bold text-slate-800 text-sm md:text-base flex items-center justify-center gap-1">
                            <span className="text-amber-500">★</span> (5.0)
                        </p>
                    </div>
                </div>

                {/* Booking btn*/}
                <Link
                    href="/dashboard"
                    className="w-full mt-6 bg-[#1877f2] hover:bg-blue-600 text-white font-semibold py-3.5 px-4 rounded-xl transition duration-200 text-center text-sm md:text-base shadow-sm inline-block"
                >
                    Book Appointment Now
                </Link>

            </div>
        </div>
    );
};

export default DetailsPage;