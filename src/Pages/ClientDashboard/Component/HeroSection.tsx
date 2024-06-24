const HeroSection = () => {
  return (
    <div className="relative flex   items-start justify-between  p-8">
      <div>
        <h1 className="text-3xl font-bold text-white xsMobile:hidden miniMobile:hidden mobile:hidden miniTablet:hidden tablet:hidden miniLaptop:hidden">
          Complete <span className="text-[#32cd32]">these</span> steps{" "}
          <span className="text-[#32cd32]">to</span> stand{" "}
          <span className="text-[#32cd32]">out</span> and{" "}
          <span className="text-[#32cd32]">hire fast .</span>
        </h1>
        <pre className="hidden font-bold text-white xsMobile:-ml-10 xsMobile:-mt-4 xsMobile:inline-block xsMobile:text-xl miniMobile:-ml-8 miniMobile:-mt-4 miniMobile:inline-block miniMobile:text-2xl mobile:-ml-8 mobile:-mt-4 mobile:inline-block mobile:text-2xl miniTablet:-ml-8 miniTablet:inline-block miniTablet:text-3xl tablet:-ml-8 tablet:inline-block  tablet:text-4xl miniLaptop:-ml-8 miniLaptop:inline-block  miniLaptop:text-4xl">
          Complete <span className="text-[#32cd32]">these </span>steps{"\n"}
          <span className="text-[#32cd32]">to </span>stand out{" "}
          <span className="text-[#32cd32]">and</span>
          {"\n"}hire <span className="text-[#32cd32]">fast.</span>
        </pre>
        <div className="mt-8 flex space-x-8 xsMobile:-ml-10  xsMobile:flex-col xsMobile:space-x-0 xsMobile:space-y-5  miniMobile:-ml-8 miniMobile:flex-col miniMobile:space-x-0 miniMobile:space-y-4  mobile:-ml-8 mobile:flex-col mobile:space-x-0 mobile:space-y-4 miniTablet:-ml-8 miniTablet:flex-col miniTablet:space-x-0 miniTablet:space-y-5 tablet:-ml-8 tablet:flex-col tablet:space-x-0 tablet:space-y-6  miniLaptop:-ml-8  miniLaptop:flex-col   miniLaptop:space-x-0 miniLaptop:space-y-6">
          <div className="flex   flex-1 items-center rounded-md bg-[#1e1e23] p-8 text-white shadow-md xsMobile:w-[120%]">
            <div>
              <p className="text-xl font-semibold tablet:text-2xl">
                Required to hire
              </p>
              <p className="mt-2 text-xl font-semibold tablet:text-2xl">
                Add a billing method. You could start hiring 3x faster.
              </p>
            </div>
            <div className="ml-auto">
              <span className="inline-block text-3xl">💵</span>
            </div>
          </div>
          <div className="flex flex-1 items-center  rounded-md bg-[#1e1e23] p-8 text-xl text-white shadow-md xsMobile:w-[120%]">
            <div className="-mt-6">
              <p className="font-semibold xsMobile:mt-3 miniMobile:mt-3  mobile:mt-3 miniTablet:mt-3 tablet:mt-3 tablet:text-2xl">
                Required to hire
              </p>
              <p className="mt-2 font-semibold tablet:text-2xl">
                You verified your email address.
              </p>
            </div>
            <div className="ml-auto">
              <span className="inline-block text-3xl tablet:text-4xl">📧</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
