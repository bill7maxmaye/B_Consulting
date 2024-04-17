import ServiceDetails from "@/components/ServiceDetails";
import React from "react";

const About = () => {
  return (
    <div className="flex justify-center  bg-gray-100 w-full ">
      <div className="bg-white p-8 rounded-lg shadow-md w-full ">
        <div className="p-8 rounded-lg shadow-md w-full">
          <h1 className="text-3xl font-bold mb-4 title">About Us</h1>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 mt-8 title">Our Vision</h2>
          <p className="text-gray-700 justify-center items-center">
            Our vision at Abdu Consulting is to be the leading business and
            investment consulting firm, providing unparalleled expertise and
            solutions that drive global business growth. We believe in the
            transformative power of data-driven insights, innovative approaches,
            and tailored solutions. Our goal is to empower businesses of all
            sizes and industries to achieve their full potential. With a focus
            on excellence, collaboration, and customer-centricity, we strive to
            create long-term value for our clients, partners, and stakeholders.
            Let’s talk
          </p>
        </div>
        <ServiceDetails imagePosition="left" imageUrl="/images/about1.webp" />
      </div>
    </div>
  );
};

export default About;
