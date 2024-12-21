import { services } from "@/constants/services";
import React from "react";
import ServicesCard from "../ui/ServiceCard";

const Services = () => {
  return (
    <section className="max-w-7xl min-h-screen w-full h-full relative flex flex-col items-center overflow-hidden  px-4">
      <h1 className="text-4xl font-bold mb-6 text-secondary">My Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {services.map((service) => (
          <ServicesCard
            key={service.id}
            img={service.img}
            title={service.title}
            description={service.description}
            id={service.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
