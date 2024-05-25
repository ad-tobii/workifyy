function HomeHeroSection() {
  return (
    <div className="container">
      <div className="pt-36 mx-auto  z-50 relative miniTablet:pt-28">
        <section className="desktop:ml-6  ">
          <div className="text-white pt-[4rem] ">
            <h3 className="text-5xl tracking-wide max-w-[51rem] leading-normal tablet:text-[2rem] tablet:pb-3 miniMobile:text-[1.5rem] xsMobile:text-[1rem]">
              Local Service, Global Standards:
            </h3>
            <span className="text-[#32CD32] text-5xl tablet:text-[1.6rem]  miniMobile:text-[1rem] xsMobile:leading-6">
              Your Trusted Connection
            </span>
          </div>
          <p className="text-white text-xl max-w-[35rem] pb-3 leading-loose tracking-wide  tablet:pt-3 tablet:pr-12  miniMobile:text-[1rem]">
            Discover the pinnacle of local service, meticulously crafted to meet
            global standards of excellence and reliability.
          </p>
          <a href="/signup">
            <button
              className="
  @apply bg-[#32CD32] text-white rounded-sm px-4 py-2 text-sm font-semibold shadow-sm;"
            >
              GET STARTED
            </button>
          </a>
        </section>
      </div>
    </div>
  );
}

export default HomeHeroSection;
