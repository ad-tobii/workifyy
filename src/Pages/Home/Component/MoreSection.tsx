import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function MoreSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const steps = [
    {
      imgSrc: "/assets/Character1.svg",
      text: "Apply to Workifyy",
    },
    {
      imgSrc: "/assets/Character3.svg",
      text: "Get Verified",
    },
    {
      imgSrc: "/assets/Character2.svg",
      text: "Start Working",
    },
  ];

  return (
    <div className="mt-[10rem] container">
      <div className="mx-auto">
        <div className="text-center">
          <h1 className="text-[#32CD32] text-[3rem] tracking-wide laptop:text-[2rem]">
            Three steps to be a workifier
          </h1>
        </div>

        <div className="mx-auto mt-[3rem] max-w-4xl">
          {isMobile ? (
            <Carousel
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              showStatus={false}
              showIndicators={false}
            >
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <img
                    src={step.imgSrc}
                    alt=""
                    className="mx-auto w-[8rem] h-[8rem]"
                  />
                  <p className="text-white pt-3">{step.text}</p>
                </div>
              ))}
            </Carousel>
          ) : (
            <div className="flex justify-center self-center gap-[10rem] laptop:gap-[6rem]">
              {steps.map((step, index) => (
                <div key={index} className="mx-auto">
                  <img src={step.imgSrc} alt="" className="tablet:w-[6.5rem]" />
                  <p className="text-white pt-3">{step.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
