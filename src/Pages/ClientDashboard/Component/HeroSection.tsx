const HeroSection = () => {
  return (
    <div className="relative flex items-start justify-between p-8">
      <div>
        <h1 className="text-2xl font-bold">
          Complete these steps to stand out and hire fast
        </h1>
        <div className="mt-8 flex space-x-8">
          <div className="flex flex-1 items-center rounded-md bg-white p-8 text-black shadow-md">
            <div>
              <p className="font-semibold">Required to hire</p>
              <p className="mt-2 font-semibold">
                Add a billing method. You could start hiring 3x faster.
              </p>
            </div>
            <div className="ml-auto">
              <span className="inline-block text-3xl">💵</span>
            </div>
          </div>
          <div className="flex flex-1 items-center rounded-md bg-white p-8 text-black shadow-md">
            <div>
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
      <button className="rounded bg-green-500 px-4 py-2 font-bold text-white shadow-lg hover:bg-green-600">
        + Post a job
      </button>
    </div>
  );
};

export default HeroSection;
