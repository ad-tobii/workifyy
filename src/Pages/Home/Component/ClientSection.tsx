import {
  FaRegCircleCheck,
  FaCircleDollarToSlot,
  FaClock,
} from "react-icons/fa6";
function ClientSection() {
  return (
    <section className="container">
      <div className="relative mx-auto mt-32 w-full rounded-md bg-[url('/assets/ClientSection.jpg')] bg-cover bg-center bg-no-repeat px-5 py-20 xsMobile:mx-auto xsMobile:w-[95%] miniMobile:w-[95%] mobile:w-[95%] tablet:w-[95%] laptop:w-[95%]">
        <div className="absolute inset-0 rounded-md bg-black bg-opacity-30"></div>
        <div className="relative">
          <h2 className="max-w-[45rem] pb-3 text-4xl font-bold leading-tight text-white xsMobile:text-xl miniMobile:text-xl miniTablet:text-2xl">
            Find Technicians Your Way
          </h2>
          <p className="max-w-[30rem] text-lg leading-relaxed tracking-normal text-white ">
            Work with the largest network of independent professionals and get
            things done—from quick turnarounds to big transformations.
          </p>
          <section className="flex content-center items-center justify-center gap-8 self-center pr-2 pt-12 xsMobile:flex-col miniMobile:flex-col mobile:flex-col miniTablet:flex-col tablet:flex-col miniLaptop:flex-col desktop:gap-2">
            <div className="miniTablet:-h-[7rem] h-[9.5rem] w-96 cursor-pointer rounded-md bg-[#1b761b] text-white transition-all duration-300  hover:bg-green-700 xsMobile:h-[6.2rem] xsMobile:w-[18rem] miniMobile:h-[6rem] miniMobile:w-[18rem] mobile:w-[23rem] tablet:w-[26.5rem] miniLaptop:w-[33rem] laptop:h-[12rem] desktop:h-[13rem] ">
              <figure className="pl-3 pt-3">
                <div>
                  <FaRegCircleCheck className="text-3xl xsMobile:text-lg miniMobile:text-lg" />
                </div>
                <p className=" pt-3 text-3xl font-medium xsMobile:pt-1 xsMobile:text-lg miniMobile:pt-1 miniMobile:text-lg laptop:text-xl">
                  Hire trustworthy vetted professionals.{" "}
                </p>
              </figure>
            </div>
            <div className="h-[9.5rem] w-96 cursor-pointer rounded-md bg-[#1b761b] text-white transition-all duration-300 hover:bg-green-700 xsMobile:h-[6.2rem] xsMobile:w-[18rem] miniMobile:h-[6rem] miniMobile:w-[18rem] mobile:w-[23rem] tablet:w-[26.5rem] miniLaptop:w-[33rem] laptop:h-[12rem] desktop:h-[13rem]">
              <figure className="pl-3 pt-3">
                <div>
                  <FaCircleDollarToSlot className=" text-3xl  xsMobile:text-lg miniMobile:text-lg" />
                </div>
                <p className=" pt-3 text-3xl font-medium xsMobile:pt-1 xsMobile:text-lg miniMobile:pt-1 miniMobile:text-lg laptop:text-xl">
                  Get the best quality at low prices.
                </p>
              </figure>
            </div>
            <div className="h-[9.5rem] w-96 cursor-pointer rounded-md bg-[#1b761b] text-white transition-all duration-300 hover:bg-green-700 xsMobile:h-[6.2rem] xsMobile:w-[18rem] miniMobile:h-[6rem] miniMobile:w-[18rem] mobile:w-[23rem] tablet:w-[26.5rem] miniLaptop:w-[33rem] laptop:h-[12rem] desktop:h-[13rem]">
              <figure className="pl-3 pt-3">
                <div>
                  <FaClock className=" text-3xl  xsMobile:text-lg miniMobile:text-lg" />
                </div>
                <p className=" pt-3 text-3xl font-medium xsMobile:pt-1 xsMobile:text-lg miniMobile:pt-1 miniMobile:text-lg laptop:text-xl">
                  Convenient, Easy to use and reliable.
                </p>
              </figure>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default ClientSection;
