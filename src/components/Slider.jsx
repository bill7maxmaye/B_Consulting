import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const fadeImages = [
  {
    url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Transforming Challenges into Opportunities",
  },
  {
    url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    caption: "Partnering for Sustainable Growth",
  },
  {
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Expert Guidance for Your Business Journey",
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container relative  ">
      <Fade autoplay={true} duration={2000}>
        {fadeImages.map((fadeImage, index) => (
          <div key={index} className="slide-item relative">
            <img
              style={{ width: "100%", height: "600px" }}
              src={fadeImage.url}
              alt={fadeImage.caption}
            />
            <div className="slide-caption absolute top-[250px] left-0 w-full text-center text-white bg-blend-darken bg-opacity-50 py-2 ">
              <h2 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                {fadeImage.caption}
              </h2>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slideshow;
