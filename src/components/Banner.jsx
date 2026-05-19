import { Separator } from "@heroui/react";

const Banner = () => {
  return (
    <div className="bg-slate-500 text-white flex flex-col justify-between min-h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl p-4 md:p-6">
      
      {/* Top Split Section: Image Left, Text Right */}
      <div className="flex flex-col md:flex-row gap-8 items-center flex-1 w-full">

         {/* Right Side: Text & Content Panel */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left gap-5 px-2 md:px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Online Medical<br /> 
            <span className="text-green-500">Healthcare</span>
          </h1>

          <p className="text-base md:text-lg text-gray-300 font-light max-w-xl">
            Locate trusted medical experts, view patient reviews, 
            and book instant check-ups or video consultations effortlessly.
          </p>

          <div className="flex gap-4 mt-2">
            <button className="uppercase font-semibold tracking-wider bg-green-500 hover:bg-cyan-600 active:scale-95 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/20 cursor-pointer text-sm">
              Get Started Now
            </button>

            <button className="uppercase font-semibold tracking-wider bg-white/10 hover:bg-white/20 active:scale-95 text-white border border-white/20 px-6 py-3 rounded-full transition-all duration-300 cursor-pointer text-sm">
              View Hospitals
            </button>
          </div>
        </div>
        
        {/* Left Side: Image Panel */}
        <div className="w-full md:w-1/2 h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
          <img 
            src="/assets/doctorGroup.png" 
            alt="Adventure Group" 
            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
          />
        </div>

       

      </div>

      
    </div>
  );
};

export default Banner;