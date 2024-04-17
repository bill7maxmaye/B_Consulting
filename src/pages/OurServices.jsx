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
    <div className=" w-full mx-auto bg-white rounded-xl shadow-md p-8 mb-4">
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
              <img class="rounded-t-lg" src="/images/logo.jpg" alt="" />

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

      <div className="flex flex-col md:flex-row w-full mx-auto mt-8 bg-white rounded-lg shadow-md overflow-hidden">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="/images/service2.webp"
            alt="Project Image"
            className="w-full h-auto md:h-full object-cover"
          />
        </div>

        {/* Description */}
        <div className="md:w-1/2 p-8">
          <h1 className="text-3xl font-bold mb-4">
            Maximizing Returns: Investment Strategy for a Growing Tech Company
          </h1>
          <p className="text-lg mb-4">
            Discover how Abdu Consulting helped a fast-growing tech company
            maximize their returns and enter new markets, leveraging their
            expertise in investment strategy and market research.
          </p>
          <ul className="list-disc ml-6">
            <li>Investment strategy to maximize returns</li>
            <li>Expansion into new markets</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
