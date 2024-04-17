import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import React from "react";
import services from "@/data/serviceData";
import { Link } from "react-router-dom";
import ServiceDetails from "@/components/ServiceDetails";

const OurServices = () => {
  // Define an array of objects containing data for each card

  return (
    <div className=" w-full mx-auto bg-white rounded-xl  p-8 mb-4 ">
      <p className="text-center text-3xl font-bold mb-8 title p-10">
        Our Services
      </p>
      {/* Grid layout for cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Map over the services array and render a card for each service */}
        {services.map((service, index) => (
          <Link to={service.route} key={index}>
            <Card
              key={index}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 transform hover:scale-105   "
            >
              <img
                className="rounded-t-lg h-[250px]"
                src={service.image}
                alt=""
              />

              <CardHeader className="text-center py-6 ">
                <CardTitle className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {service.title}
                </CardTitle>
                <CardDescription className=" mb-3 font-normal text-gray-700 dark:text-gray-400 ">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      {/* first part */}
      <ServiceDetails imagePosition="left" imageUrl="/images/service1.webp" />

      {/* second part */}

      <ServiceDetails imagePosition="right" imageUrl="/images/service2.webp" />
    </div>
  );
};

export default OurServices;
