import { Card, Avatar, Button } from "@heroui/react";

const DoctorServiceCards = () => {
  return (
    <div className="grid grid-cols-3 gap-3 bg-slate-900 p-4 rounded-2xl justify-center items-center mt-10">
      
      {/* Card 1: Cardiology Specialist Group */}
      <Card className="w-[320px] sm:w-[350px] gap-3 p-4 bg-slate-800/60 border border-white/5 text-white shadow-xl   flex flex-col justify-between">
        <div className="w-full h-[240px] rounded-xl overflow-hidden bg-slate-900 border border-cyan-500/10">
          <img
            alt="Cardiology Specialists"
            className="pointer-events-none w-full h-full object-cover object-top select-none "
            loading="lazy"
            src="/assets/Dr.Rayhan Sarkar.png" 
          />
        </div>
        
        <Card.Footer className="flex gap-2 p-0 mt-2 items-center border-t border-white/5 pt-3">
          <Avatar aria-label="Lead Doctor Profile" className="w-6 h-6">
            <Avatar.Image
              alt="Dr. Rayhan"
              src="/assets/Dr.Rayhan Sarkar.png"
            />
            <Avatar.Fallback className="text-[10px] bg-cyan-500 text-white">RS</Avatar.Fallback>
          </Avatar>
          <span className="text-xs text-gray-300 font-medium">By Dr. Rayhan</span>
        </Card.Footer>

        <div className="flex justify-between items-center">
          <Card.Header className="p-0 flex flex-col items-start mt-1">
          <Card.Title className="text-lg font-bold text-white tracking-tight">Cardiology</Card.Title>
          <Card.Description className="text-xs text-cyan-400 font-medium">24 Specialists Available</Card.Description>
        </Card.Header>

        <Button>View Details</Button>
        </div>

      </Card>
      {/* Card 1: Cardiology Specialist Group */}
      <Card className="w-[320px] sm:w-[350px] gap-3 p-4 bg-slate-800/60 border border-white/5 text-white shadow-xl   flex flex-col justify-between">
        <div className="w-full h-[240px] rounded-xl overflow-hidden bg-slate-900 border border-cyan-500/10">
          <img
            alt="Cardiology Specialists"
            className="pointer-events-none w-full h-full object-cover object-top select-none "
            loading="lazy"
            src="/assets/Dr.Al-Amin Mondol.png" 
          />
        </div>
        
        <Card.Footer className="flex gap-2 p-0 mt-2 items-center border-t border-white/5 pt-3">
          <Avatar aria-label="Lead Doctor Profile" className="w-6 h-6">
            <Avatar.Image
              alt="Dr. Rayhan"
              src="/assets/Dr.Rayhan Sarkar.png"
            />
            <Avatar.Fallback className="text-[10px] bg-cyan-500 text-white">RS</Avatar.Fallback>
          </Avatar>
          <span className="text-xs text-gray-300 font-medium">By Dr. Rayhan</span>
        </Card.Footer>

        <div className="flex justify-between items-center">
          <Card.Header className="p-0 flex flex-col items-start mt-1">
          <Card.Title className="text-lg font-bold text-white tracking-tight">Cardiology</Card.Title>
          <Card.Description className="text-xs text-cyan-400 font-medium">24 Specialists Available</Card.Description>
        </Card.Header>

        <Button>View Details</Button>
        </div>

      </Card>
      {/* Card 2: Cardiology Specialist Group */}
      <Card className="w-[320px] sm:w-[350px] gap-3 p-4 bg-slate-800/60 border border-white/5 text-white shadow-xl   flex flex-col justify-between">
        <div className="w-full h-[240px] rounded-xl overflow-hidden bg-slate-900 border border-cyan-500/10">
          <img
            alt="Doctor-f"
            className="pointer-events-none w-full h-full object-cover object-top select-none "
            loading="lazy"
            src="/assets/Doctor-f.png" 
          />
        </div>
        
        <Card.Footer className="flex gap-2 p-0 mt-2 items-center border-t border-white/5 pt-3">
          <Avatar aria-label="Lead Doctor Profile" className="w-6 h-6">
            <Avatar.Image
              alt="Dr. Rayhan"
              src="/assets/Dr.Rayhan Sarkar.png"
            />
            <Avatar.Fallback className="text-[10px] bg-cyan-500 text-white">RS</Avatar.Fallback>
          </Avatar>
          <span className="text-xs text-gray-300 font-medium">By Dr. Rayhan</span>
        </Card.Footer>

        <div className="flex justify-between items-center">
          <Card.Header className="p-0 flex flex-col items-start mt-1">
          <Card.Title className="text-lg font-bold text-white tracking-tight">Cardiology</Card.Title>
          <Card.Description className="text-xs text-cyan-400 font-medium">24 Specialists Available</Card.Description>
        </Card.Header>

        <Button>View Details</Button>
        </div>

      </Card>

    
    

    </div>
  );
};

export default DoctorServiceCards;