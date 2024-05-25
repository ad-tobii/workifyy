

function ClientSection() {
  return (
    <div className="container">
      <section className="mx-auto">
        <div className="relative mt-[8rem] w-full rounded-[.6rem] bg-[url('/assets/ClientSection2.jpg')] bg-cover bg-center bg-no-repeat py-[5rem] pl-5 laptop:mx-auto laptop:w-[95%]">
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-[.6rem]"></div>
          <div className="relative">
            <h2 className="max-w-[45rem] font-extrabold  text-[2.8rem] leading-[3rem] text-white miniTablet:text-[1.7rem]">
              Find Technicians Your Way
            </h2>
            <p className="max-w-[30rem] text-white leading-relaxed tracking-widest text-[1.2rem] miniMobile:pt-4">
              Work with the largest network of independent professionals and get
              things done—from quick turnarounds to big transformations.
            </p>
            <section className="flex justify-center self-center items-center content-center gap-[2rem] pt-12 desktop:gap-[.8rem] pr-[.5rem] miniTablet:flex-col miniMobile:mx-auto">
              <div className="w-[24rem] h-[8rem] rounded-md bg-[#32CD32]  laptop:h-[9rem] miniMobile:w-[18rem]">
                <h3 className="text-white text-[2rem] pl-3 pt-1 laptop:text-[1.3rem] ">
                  Lorem ipsum dolor sit amet.
                </h3>
                <p className="text-white text-[1rem] pl-3">Lorem ipsum</p>
              </div>
              <div className="w-[24rem] h-[8rem] rounded-md bg-[#32CD32]  laptop:h-[9rem] miniMobile:w-[18rem]">
                <h3 className="text-white text-[2rem] pl-3 pt-1 laptop:text-[1.3rem]">
                  Lorem ipsum dolor sit amet.
                </h3>
                <p className="text-white text-[1rem] pl-3">Lorem ipsum</p>
              </div>
              <div className="w-[24rem] h-[8rem] rounded-md bg-[#32CD32]  laptop:h-[9rem] miniMobile:w-[18rem]">
                <h3 className="text-white text-[2rem] pl-3 pt-1 laptop:text-[1.3rem]  ">
                  Lorem ipsum dolor sit amet.
                </h3>
                <p className="text-white text-[1rem] pl-3">Lorem ipsum</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ClientSection;
