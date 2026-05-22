import DoctorServiceCards from '@/components/DoctorServiceCards';


const fetchAppointment = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/all-appointment`, {
      cache: 'no-store' 
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    return data || [];
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return []; 
  }
}


const AllAppointPage = async () => {
  const appointments = await fetchAppointment();

  return (
    <div className='w-11/12 mx-auto py-10'>
      <h1 className='text-3xl font-bold text-default-800 mb-6'>
        All Appointments ({appointments.length})
      </h1>

  
      {appointments.length === 0 ? (
        <div className="text-center py-12 text-default-500">
          No appointments found.
        </div>
      ) : (
     
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {appointments.map((doctor) => (
            <DoctorServiceCards key={doctor._id} doctor={doctor} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllAppointPage;