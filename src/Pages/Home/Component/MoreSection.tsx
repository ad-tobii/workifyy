// const features = [
//   {
//     image: "/assets/Character1.svg",
//     description: "Apply to Workifyy",
//   },
//   {
//     image: "/assets/Character3.svg",
//     description: "Get Verified",
//   },
//   {
//     image: "/assets/Character2.svg",

//     description: "Start Working",
//   },
// ];

export default function MoreSection() {
  return (
    <div className="mt-[10rem] container">
      <div className="mx-auto  px-3">
        {/* <div className="flex justify-center self-center content-center"> */}
        <div className="text-center">
          <h1 className="text-[#32CD32] text-[3rem] tracking-wide laptop:text-[1.5rem]">
            Three steps to be a workifier
          </h1>
        </div>

        <div className="mx-auto mt-[3rem] max-w-4xl ">
          <div className="flex justify-center self-center gap-[10rem] laptop:gap-[6rem] tablet:flex-col">
            <div className="mx-auto">
              <img
                src="/assets/Character1.svg"
                alt=""
                className="tablet:w-[6.5rem]"
              />
              <p className="text-white pt-3">Apply to Workifyy</p>
            </div>

            <div className="pt-[1.4rem] mx-auto">
              <img
                src="/assets/Character3.svg"
                alt=""
                className="tablet:w-[5rem]"
              />
              <p className="text-white  pt-3">Get Verified</p>
            </div>

            <div className="pt-[1.4rem] mx-auto">
              <img
                src="/assets/Character2.svg"
                alt=""
                className="tablet:w-[5rem]"
              />
              <p className="text-white  pt-3">Start Working</p>
            </div>
            {/* {features.map((feature) => (
              <div key={feature.image}>
                <img src= {feature.image} className="" />
                
  
                <dd className="mt-2 text-base leading-7 text-white">
                  {feature.description}
                </dd> */}
          </div>
        </div>
      </div>
    </div>
  );
}
