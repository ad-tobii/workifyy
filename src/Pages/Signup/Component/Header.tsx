function Header() {
  return (
    <div className=" xsMobile:mt-[1.5rem] xsMobile:flex xsMobile:flex-col xsMobile:items-center xsMobile:text-[1.7rem] miniMobile:mt-5 miniMobile:flex miniMobile:flex-col miniMobile:items-center miniMobile:text-[180%] mobile:mt-12 mobile:flex mobile:flex-col mobile:items-center mobile:text-3xl miniTablet:mt-12 miniTablet:flex miniTablet:flex-col miniTablet:items-center miniTablet:text-4xl tablet:mt-12 tablet:flex tablet:flex-col tablet:items-center tablet:text-[2.8rem]  miniLaptop:mt-12 miniLaptop:flex miniLaptop:flex-col miniLaptop:items-center miniLaptop:text-[3.2rem] laptop:mt-12 laptop:flex  laptop:justify-center laptop:text-[280%] desktop:mt-12 desktop:flex desktop:justify-center desktop:text-[300%] largeDesktop:mt-6 largeDesktop:flex largeDesktop:justify-center largeDesktop:text-[300%]">
      <h1 className="hidden text-white laptop:inline-block desktop:inline-block largeDesktop:inline-block">
        Join as client or professional
      </h1>
      <pre className="hidden text-white xsMobile:inline-block miniMobile:inline-block mobile:inline-block miniTablet:inline-block tablet:inline-block miniLaptop:inline-block  ">
        Join as a client or
      </pre>
      <pre className="hidden text-white xsMobile:inline-block miniMobile:inline-block mobile:inline-block miniTablet:inline-block tablet:inline-block miniLaptop:inline-block">
        professional
      </pre>
    </div>
  );
}

export default Header;
