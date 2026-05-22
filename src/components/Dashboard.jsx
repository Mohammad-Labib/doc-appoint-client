"use client";

import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Dashboard = ({ doctor, onUpdate, onDelete }) => {
  const { _id, name, specialty, image, experience, availability, fee } = doctor || {};

  return (
    <Card className="w-full justify-center items-center max-w-[700px] flex-col md:flex-row  p-4 gap-4 border border-white/10 shadow-2xl relative text-black overflow-hidden">
      
  
        
  

      {/* Right Side: Content Area */}
     
      <div className="flex flex-1 flex-col justify-between gap-3">

        <div className="flex gap-6">
          <Button variant="outline">Outline</Button>
         <Button variant="outline">My Booking</Button>
      </div>

        {/* Upper Content: Info */}
        <div className="space-y-1">
          <div className="flex items-center justify-between gap-2">
            <h4 className="text-xl font-bold tracking-tight text-black">
              {name}
            </h4>
            
          
          </div>
          
          <p className="text-sm font-medium text-gray-500">
            {specialty}
          </p>
          <p className="text-xs text-green-600 font-medium">
            {name}
          </p>
        </div>

        {/* Lower Content: Stats, Update & Delete Buttons */}
        <div className="mt-auto flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-gray-100 pt-3">
          
          {/* Fee & Availability */}
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-bold text-orange-500">
              {fee}
            </span>
            <span className="text-xs text-gray-400">
              Available: {availability}
            </span>
          </div>

          {/* Action Buttons: Update & Delete */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {/* Update Button */}
            <Button 
              onClick={() => onUpdate && onUpdate(_id)}
              className="w-full sm:w-auto h-9 px-4 rounded-xl bg-blue-500 text-xs font-semibold text-white transition-all duration-300 hover:bg-blue-600"
            >
              Update
            </Button>

            {/* Delete Button */}
            <Button 
              onClick={() => onDelete && onDelete(_id)}
              className="w-full sm:w-auto h-9 px-4 rounded-xl bg-red-500 text-xs font-semibold text-white transition-all duration-300 hover:bg-red-600"
            >
              Delete
            </Button>
          </div>
          
        </div>
        
      </div>
    </Card>
  );
};

export default Dashboard;