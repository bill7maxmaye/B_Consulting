import React from "react";

const HomeDetail = () => {
  return (
    <div className="bg-gray-100 p-20 mb-10">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 title">
          Expert Consulting Services for Your Business Needs
        </h1>
        <p className="text-lg text-gray-800 leading-relaxed mb-8">
          Welcome to Abdu Consulting, your trusted partner in business and
          investment consulting. Our team of experienced professionals provides
          expert guidance and support to help you navigate complex business
          challenges and achieve your goals. We specialize in investment
          strategy, business consulting, and market research, providing
          customized solutions to meet your unique needs. With our
          client-centric approach, we are committed to delivering exceptional
          results that drive your business forward.
        </p>
        <div className="max-w-full overflow-hidden rounded-lg shadow-lg">
          <img
            className="w-full h-auto"
            src="/images/home1.webp"
            alt="Consulting Services"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeDetail;
