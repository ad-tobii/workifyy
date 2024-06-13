import { FaRegCircleCheck, FaCircleDollarToSlot,FaClock } from "react-icons/fa6";
function ClientSection() {
  return (
    <section className="container">
      <div className="relative mt-32 w-full rounded-md bg-[url('/assets/ClientSection.jpg')] bg-cover bg-center bg-no-repeat px-5 py-20 laptop:mx-auto laptop:w-[95%]">
        <div className="absolute inset-0 rounded-md bg-black bg-opacity-30"></div>
        <div className="relative">
          <h2 className="max-w-[45rem] pb-3 text-4xl leading-tight text-white drop-shadow-md miniMobile:text-xl miniTablet:text-2xl">
            Find Technicians Your Way
          </h2>
          <p className="max-w-[30rem] text-lg leading-relaxed tracking-normal text-white drop-shadow-md">
            Work with the largest network of independent professionals and get
            things done—from quick turnarounds to big transformations.
          </p>
          <section className="flex content-center items-center justify-center gap-8 self-center pr-2 pt-12 miniMobile:flex-col mobile:flex-col miniTablet:flex-col desktop:gap-2">
            <div className="flex h-36 w-96 rounded-md bg-[#1b761b] text-2xl font-medium text-white  miniMobile:w-72  mobile:w-80 miniTablet:w-96 laptop:h-36 laptop:text-lg">
              <ul>
                <li className="pl-3 pt-5 text-3xl font-medium text-white laptop:text-lg">
                  Hire trustworthy vetted professionals.
                </li>
              </ul>
              <div>
                <FaRegCircleCheck className="-ml-36 mt-[3.7rem] text-3xl" />
              </div>
            </div>
            <div className=" flex h-36 w-96 rounded-md bg-[#1b761b] text-white transition-all duration-300 hover:bg-green-700 miniMobile:w-72 mobile:w-80 miniTablet:w-96 laptop:h-36">
              <ul>
                <li className="pl-3 pt-5 text-3xl font-medium text-white laptop:text-lg">
                  Get the best quality at low prices.
                </li>
              </ul>
              <div>
                {" "}
                <FaCircleDollarToSlot className="-ml-48 mt-[3.7rem] text-3xl" />
              </div>
            </div>
            <div className="flex h-36 w-96 rounded-md bg-[#1b761b] text-white transition-all duration-300 hover:bg-green-700 miniMobile:w-72 mobile:w-80 miniTablet:w-96 laptop:h-36">
              <ul>
                <li className="pl-3 pt-5 text-3xl font-medium  laptop:text-lg">
                  Convenient, Easy to use and reliable.
                </li>{/*rand comment */}
              </ul>
              <div>
                <FaClock className="-ml-40 mt-[3.7rem] text-3xl" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default ClientSection;
