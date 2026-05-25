import DoctorServiceCards from "@/components/DoctorServiceCards";

export const dynamic = "force-dynamic";

const API =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://doc-appoint-server-henna.vercel.app";

const fetchAppointment = async () => {
  try {
    const res = await fetch(`${API}/all-appointment`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("API failed");

    const data = await res.json();

    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
};

const AllAppointPage = async () => {
  const appointments = await fetchAppointment();

  return (
    <div className="w-11/12 mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">
        All Appointments ({appointments.length})
      </h1>

      {appointments.length === 0 ? (
        <p className="text-center text-gray-500">No data found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appointments.map((doctor, index) => (
            <DoctorServiceCards
              key={doctor?._id || index}
              doctor={doctor}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllAppointPage;