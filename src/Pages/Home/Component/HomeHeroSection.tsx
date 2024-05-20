function HomeHeroSection() {
  return (
    <div>
      <div className="pt-36 max-w-containerWidth mx-auto  z-50 relative">
        <section className="desktop:ml-6 ">
          <div className="text-white pt-[4rem] miniTablet:pt-[1.2rem]">
            <h3 className="text-5xl tracking-widest max-w-[55rem] leading-relaxed miniTablet:text-[2rem]">
              Local Service, Global Standards:{" "}
              <span className="text-primaryColor">Your Trusted Connection</span>
            </h3>
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
