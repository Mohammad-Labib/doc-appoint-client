

import { Avatar, Button, Card } from '@heroui/react';


const fetchAppointment = async () =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/all-appointment`)
    const res = await fetch("http://localhost:8000/all-appointment")
    const data = await res.json();
    return data || [];
}

const allAppointPage = async () => {
    const appointment = await fetchAppointment();
    console.log(appointment)
    return (
        <div>
            <h1>All Appointment Page</h1>

              <Card className="group w-[320px] sm:w-[360px]  rounded border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl ">
  
  {/* Image Section */}
  <div className="relative h-[250px] overflow-hidden">
    <img
      alt="Cardiology Specialists"
      className="h-full w-full object-cover object-top"
      loading="lazy"
      src="/assets/Dr.Al-Amin Mondol.png"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

    {/* Specialty Badge */}
    <div className="absolute top-4 left-4 rounded-full border border-cyan-400/30 bg-cyan-500/20 px-4 py-1 backdrop-blur-md">
      <p className="text-xs font-semibold tracking-wide text-cyan-300">
        Top Rated
      </p>
    </div>
  </div>

  {/* Content */}
  <div className="space-y-4 p-5">

    {/* Doctor Info */}
    <div className="flex items-center gap-3">
      <Avatar aria-label="Lead Doctor Profile" className="h-11 w-11 border-2 border-cyan-400/40">
        <Avatar.Image
          alt="Dr. Rayhan"
          src="/assets/Dr.Rayhan Sarkar.png"
        />
        <Avatar.Fallback className="bg-cyan-500 text-sm font-bold text-white">
          RS
        </Avatar.Fallback>
      </Avatar>

      <div>
        <h4 className="text-sm font-semibold text-white">
          Dr. Rayhan Sarkar
        </h4>
        <p className="text-xs text-gray-400">
          Senior Cardiologist
        </p>
      </div>
    </div>

    {/* Card Title */}
    <div>
      <Card.Title className="text-2xl font-bold tracking-tight text-white">
        Cardiology
      </Card.Title>

      <Card.Description className="mt-1 text-sm leading-relaxed text-gray-400">
        Expert heart care with modern diagnosis, preventive treatment, and experienced specialists.
      </Card.Description>
    </div>

    {/* Stats */}
    <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3 backdrop-blur-sm">
      <div>
        <p className="text-lg font-bold text-cyan-400">24+</p>
        <span className="text-xs text-gray-400">
          Specialists
        </span>
      </div>

      <div>
        <p className="text-lg font-bold text-emerald-400">98%</p>
        <span className="text-xs text-gray-400">
          Success Rate
        </span>
      </div>

      <div>
        <p className="text-lg font-bold text-yellow-400">4.9</p>
        <span className="text-xs text-gray-400">
          Rating
        </span>
      </div>
    </div>

    {/* Button */}
    <Button className="h-11 w-full rounded-2xl bg-cyan-500 text-sm font-semibold text-white transition-all duration-300 hover:bg-cyan-400">
      View Details
    </Button>
  </div>
</Card>
        </div>
    );
};

export default allAppointPage;