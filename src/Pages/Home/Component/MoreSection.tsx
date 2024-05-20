

const features = [
  {
    name: "Hapiness Pledge",
    description:
      "If you're not satisfied, we'll work to make it right ",
   
  },
  {
    name: "Vetted Workifier",
    description:
      "Workers are always background checked before joining the platform",
  
  },
  {
    name: "Dedicated Support ",
    description:
      "Friendly service when you need us-every day of the work",
   
  },
  
];

export default function Example() {
  return (
    <div className="mt-[10rem]">
      <div className="mx-auto  px-3">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-4xl font-semibold leading-7 text-white">
            Your Satisfaction,{" "}
            <span className="text-[#32CD32]">Guaranteed</span>
          </h2>
        </div>
        <div className="mx-auto mt-[3rem] max-w-4xl ">
          <dl className="flex justify-center self-center gap-[5rem]">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="text-2xl font-semibold leading-7 text-[#32CD32]">
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-white">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
