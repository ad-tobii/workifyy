function HomeHeroSection() {
  return (
    <div className="container">
      <div className="pt-36 max-w-containerWidth mx-auto  z-50 relative">
        <section className="desktop:ml-6  ">
          <div className="text-white pt-[4rem] miniTablet:pt-[1.2rem]">
            <h3 className="text-5xl tracking-wide max-w-[51rem] leading-normal">
              Local Service, Global Standards:
            </h3>
            <span className="text-primaryColor text-5xl">
              Your Trusted Connection
            </span>
          </div>
          <p className="text-white text-xl max-w-[35rem] pb-3 leading-loose tracking-wide miniMobile:[20rem]">
            Discover the pinnacle of local service, meticulously crafted to meet
            global standards of excellence and reliability.
          </p>

            
          <button className="PrimaryBtn">GET STARTED</button>
        </section>
      </div>
    </div>
  );
}

export default HomeHeroSection;
