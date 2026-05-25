
import Image from "next/image";
import Link from "next/link";

const Feature = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured`, {
        cache: "no-store"
    });
    const doctors = await res.json();

    return (
        <div className="bg-slate-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-slate-900">Top Rated Doctors</h2>
                    <p className="text-gray-500 mt-2">Meet our highest-rated medical specialists</p>
                </div>



                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {doctors.map((doctor) => (
                        <div
                            key={doctor._id}
                            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col justify-between hover:shadow-md transition-shadow duration-200"
                        >

                            <div>
                                <div className="relative w-full h-48 rounded-xl overflow-hidden bg-[#73b4e6] flex items-end justify-center mb-4">
                                    <Image
                                        alt={doctor.name}
                                        src={doctor.image}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <h3 className="font-bold text-slate-900 text-lg line-clamp-1">{doctor.name}</h3>
                                <p className="text-xs text-gray-400 mt-1">{doctor.description || "MBBS"}</p>
                                <p className="text-sm text-gray-500 mt-2 line-clamp-1">Specialties in {doctor.specialty}</p>

                                <p className="text-xs text-slate-700 font-medium mt-3 bg-slate-100 p-2 rounded-lg line-clamp-1">
                                    {doctor.hospital}
                                </p>
                            </div>


                            <div className="mt-5 pt-4 border-t border-dashed border-gray-100">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xs text-gray-400">Fee</span>
                                    <span className="text-blue-600 font-bold text-sm">৳ {doctor.fee}</span>
                                </div>


                                <Link href="/login">
                                    <button className="w-full bg-[#1877f2] hover:bg-blue-600 text-white font-medium py-2.5 px-4 rounded-xl transition duration-200 text-sm text-center">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Feature;