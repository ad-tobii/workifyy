function HomeHeroSection() {
  return (
    <div className="relative z-50 mx-auto pt-20 pb-[7rem] miniTablet:pt-28">
      <section className="px-8 desktop:px-6">
        <div className="pt-[4rem] text-white">
          <h3 className="max-w-[51rem] pb-[1rem] text-5xl leading-normal tracking-wide xsMobile:text-[1rem] miniMobile:text-[1.5rem] tablet:pb-3 tablet:text-[2rem]">
            Local Service, Global Standards:
          </h3>
          <span className="text-5xl text-[#32CD32] xsMobile:leading-6 miniMobile:text-[1rem] miniTablet:text-[1.8rem] laptop:text-[2.2rem]">
            Your Trusted Connection
          </span>
        </div>
        <p className="max-w-[35rem] pt-4 text-xl leading-loose tracking-wide text-white miniMobile:text-[1rem] tablet:pr-12 tablet:pt-3">
          Discover the pinnacle of local service, meticulously crafted to meet
          global standards of excellence and reliability.
        </p>
        <div className="flex content-center items-center gap-[1rem] self-center pt-[2.5rem]">
          <div>
            <a href="/signup">
              <button className="rounded border-2 border-[#32CD32] bg-[#32CD32] px-4 py-2 font-semibold text-white duration-500 ease-in-out hover:bg-transparent hover:text-white hover:transition-all">
                GET STARTED
              </button>
            </a>
          </div>
          <div>
            <a
              href="/Signup2"
              className="rounded border-2 border-[#32CD32] bg-transparent px-4 py-2 font-semibold text-[#32CD32] duration-500 ease-in-out hover:bg-[#32CD32] hover:text-white hover:transition-all"
            >
              Join as a Pro <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeHeroSection;
