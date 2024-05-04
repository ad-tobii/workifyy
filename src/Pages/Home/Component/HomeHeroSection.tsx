function HomeHeroSection() {
  return (
    <div className="hero-section">
      <section>
        <img
          className="w-logoWidth -ml-11"
          src="/assets/workifyylogo1.png"
          alt=""
        />
        <div className="text-white">
          <h3 className="text-4xl tracking-widest max-w-textWidth leading-relaxed">
            Local Service, Global Standards:{" "}
            <span className="text-primaryColor">Your Trusted Connection</span>.
          </h3>
          <div className="flex gap-5 text-xl">
            <div>
              <a href="" className="text-primaryColor">
                Hire A Technician
              </a>
            </div>

            <div>
              <a href="" className="text-white">
                Find Customers
              </a>
            </div>
          </div>
        </div>

        <div className="mt-3 flex">
          <div>
            <input
              type="text"
              name="username"
              id="username"
              autoComplete="username"
              className="block flex-1 border-0 bg-white rounded-sm w-96 h-10 px-5 text-white placeholder:text-gray-400 focus:ring-0 outline-none sm:text-sm sm:leading-6"
              placeholder="Describe Your Problem"
            />
          </div>
          <div>
            <button className="PrimaryBtn"> Search</button>
          </div>
        </div>
      </section>

      <section>
        <img src="/assets/HeroSection.jpg" alt="" className="hero-image" />
      </section>
    </div>
  );
}

export default HomeHeroSection;
