import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import React from "react";
import services from "@/data/serviceData";
import { Link } from "react-router-dom";

const OurServices = () => {
  // Define an array of objects containing data for each card

  return (
    <div className=" w-full mx-auto bg-white rounded-xl shadow-md p-8">
      <p className="text-center text-3xl font-bold mb-8">Our Services</p>

      {/* Grid layout for cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Map over the services array and render a card for each service */}
        {services.map((service, index) => (
          <Link to={service.route} key={index}>
            <Card
              key={index}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 -z-1"
            >
              <a href="#">
                <img class="rounded-t-lg" src="/images/logo.jpg" alt="" />
              </a>
              <CardHeader className="text-center py-6 ">
                <CardTitle className="text-black text-2xl font-semibold">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-black ">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
