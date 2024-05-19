function HomeHeroSection() {
  return (
    <div>
      <div className="hero-section z-50 relative">
        <section>
          {/* <img
          className="w-logoWidth -ml-11"
          src="/assets/workifyylogo1.png"
          alt=""
        /> */}
          <div className="text-white pt-[4rem]">
            <h3 className="text-5xl tracking-widest max-w-textWidth leading-relaxed">
              Local Service, Global Standards:{" "}
              <span className="text-primaryColor">Your Trusted Connection</span>
            </h3>
          </div>
          <p className="text-white text-xl max-w-paragraphText pb-3 leading-loose tracking-wide">
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
