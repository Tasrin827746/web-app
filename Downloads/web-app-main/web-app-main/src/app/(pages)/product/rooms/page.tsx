import Features from "@/app/components/Product/Rooms/Features";
import RoomsBanner from "@/app/components/Product/Rooms/RoomsBanner";
import SIPConnector from "@/app/components/Product/Rooms/SIPConnector";
import React from "react";

const page = () => {
  return (
    <div className="space-y-28">
      <RoomsBanner />
      <div className="max-w-7xl mx-auto  px-10 lg:px-0">
        <Features />
      </div>
      <SIPConnector />
    </div>
  );
};

export default page;
