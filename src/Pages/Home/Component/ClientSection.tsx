

function ClientSection() {
  return (
    <div className="container">
      <div></div>
      <section className="mx-auto ">
        <div className="relative mt-[8rem] w-full rounded-[.6rem] bg-[url('/assets/ClientSection2.jpg')] bg-cover bg-center bg-no-repeat py-[5rem] pl-5">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-[.6rem]"></div>
          <div className="relative">
            <h2 className="max-w-[45rem]  text-[2.8rem] leading-[5rem] text-white">
              Find Technicians Your Way
            </h2>
            <p className="max-w-[30rem] text-white leading-relaxed tracking-widest text-[1.2rem]">
              Work with the largest network of independent professionals and get
              things done—from quick turnarounds to big transformations.
            </p>
            <section className="flex gap-[1.5rem]  pt-12 desktop:gap-[1rem] ">
              <div className="w-[24rem] h-[8rem] rounded-md bg-[#32CD32] desktop:w-[20rem] laptop:-w-[14rem] laptop:h-[10rem]">
                <h3 className="text-white text-[2rem] pl-3 pt-1">
                  Lorem ipsum dolor sit amet.
                </h3>
                <p className="text-white text-[1rem] pl-3">Lorem ipsum</p>
              </div>
              <div className="w-[24rem] h-[8rem] rounded-md bg-[#32CD32] desktop:w-[20rem] laptop:-w-[14rem] laptop:h-[10rem]">
                <h3 className="text-white text-[2rem] pl-3 pt-1">
                  Lorem ipsum dolor sit amet.
                </h3>
                <p className="text-white text-[1rem] pl-3">Lorem ipsum</p>
              </div>
              <div className="w-[24rem] h-[8rem] rounded-md bg-[#32CD32] desktop:w-[20rem] laptop:w-[14rem] laptop:h-[10rem]">
                <h3 className="text-white text-[2rem] pl-3 pt-1">
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
