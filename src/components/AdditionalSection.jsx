

import React from "react";
import { Button, Input } from "@heroui/react";
import { IoSearchOutline, IoCalendarOutline } from "react-icons/io5";
import Image from "next/image";

const DoctorHeroSection = () => {


  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-tr from-slate-50 via-white to-blue-50/30 flex items-center justify-center px-4 md:px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        
      
        <div className="space-y-6 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
       
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase shadow-sm">
            <IoCalendarOutline className="text-sm" /> Easy Online Booking
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight md:leading-none">
            Find & Book <br className="hidden md:inline" />
            <span className="text-[#1877f2]">Top Rated</span> Doctors
          </h1>
          
    

          <div className="pt-4 flex items-center justify-center lg:justify-start gap-8 border-t border-gray-100 mt-6">
            <div>
              <p className="text-2xl font-bold text-slate-900">100+</p>
              <p className="text-xs text-gray-400 font-medium">Expert Doctors</p>
            </div>
            <div className="border-l border-gray-200 h-8"></div>
            <div>
              <p className="text-2xl font-bold text-slate-900">50k+</p>
              <p className="text-xs text-gray-400 font-medium">Happy Patients</p>
            </div>
            <div className="border-l border-gray-200 h-8"></div>
            <div>
              <p className="text-2xl font-bold text-slate-900">4.9 ★</p>
              <p className="text-xs text-gray-400 font-medium">Top Ratings</p>
            </div>
          </div>
        </div>

      
        <div className="relative flex justify-center items-center w-full max-w-lg mx-auto lg:max-w-none">
   
          <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-gradient-to-br from-blue-400/20 to-teal-400/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
          

          <div className="relative w-full h-[350px] md:h-[480px] rounded-3xl overflow-hidden bg-gradient-to-b from-sky-200 via-blue-100 to-[#73b4e6] flex items-end justify-center shadow-lg border-4 border-white">
            
            

            <div className="absolute top-8 left-6 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl shadow-md border border-white/50 flex items-center gap-3 animate-bounce [animation-duration:3s]">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
         
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">24/7 Support</p>
                <p className="text-[10px] text-gray-400">Online Consultation</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DoctorHeroSection;