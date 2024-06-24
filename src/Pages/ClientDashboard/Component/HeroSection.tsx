const HeroSection = () => {
  return (  <div className="relative   flex items-start justify-between p-8">
      <div>
        <h1 className="text-3xl font-bold  text-white">
          Complete these steps to stand out and hire fast
        </h1>
        <div className="mt-8 flex space-x-8">
          <div className="flex flex-1 h-44 items-center rounded-md bg-[#1e1e23] p-8 text-white shadow-md">
            <div>
              <p className="font-semibold text-xl">Required to hire</p>
              <p className="mt-2 text-xl font-semibold">
                Add a billing method. You could start hiring 3x faster.
              </p>
            </div>
            <div className="ml-auto">
              <span className="inline-block text-3xl">💵</span>
            </div>
          </div>
          <div className="flex text-xl flex-1 items-center rounded-md bg-[#1e1e23] p-8 text-white shadow-md">
            <div className='-mt-6'>
              <p className="font-semibold">Required to hire</p>
              <p className="mt-2 font-semibold">
                You verified your email address.
              </p>
            </div>
            <div className="ml-auto">
              <span className="inline-block text-3xl">📧</span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  
  );
};

export default HeroSection;
