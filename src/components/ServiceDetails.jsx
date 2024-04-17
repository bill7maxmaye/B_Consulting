import React from "react";

const ServiceDetails = ({ imagePosition, imageUrl }) => {
  // Determine the classes based on the imagePosition prop
  const imageClasses = imagePosition === "right" ? "md:order-last" : "";

  return (
    <div
      className={`flex flex-col md:flex-row w-full mx-auto mt-8 bg-white rounded-lg overflow-hidden items-center justify-center p-8`}
    >
      {/* Description */}
      <div className={`md:w-1/2 pr-8 ${imageClasses}`}>
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

      {/* Image */}
      <div className="md:w-1/2">
        <img
          src={imageUrl}
          alt="Project Image"
          className="w-[500px] h-auto md:h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ServiceDetails;
