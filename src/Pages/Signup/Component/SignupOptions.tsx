import { FaUser, FaHammer } from "react-icons/fa6";
import { useState } from "react";
import SignupBtns from "./SignupBtns";
function SignupOptions() {
  const [selectedRadio, setSelectedRadio] = useState<string | null>(null);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(event.target.id);
  };

  return (
    <>
      <div
        className=" xsMobile:mt-8 xsMobile:flex xsMobile:flex-col xsMobile:items-center xsMobile:gap-y-5  miniMobile:mt-8 miniMobile:flex miniMobile:flex-col miniMobile:items-center miniMobile:gap-y-5 mobile:mt-8 
         mobile:flex mobile:flex-col mobile:items-center mobile:gap-y-6 miniTablet:mt-12 miniTablet:flex miniTablet:flex-col miniTablet:items-center miniTablet:gap-y-7 tablet:mt-12 tablet:flex tablet:flex-col tablet:items-center tablet:gap-y-7 miniLaptop:mt-12 miniLaptop:flex miniLaptop:flex-col miniLaptop:items-center miniLaptop:gap-y-7 laptop:mt-12 laptop:flex laptop:flex-col laptop:items-center laptop:gap-y-7 desktop:mt-12 desktop:flex desktop:justify-center desktop:gap-x-8 largeDesktop:mt-8 largeDesktop:flex largeDesktop:justify-center largeDesktop:gap-x-8 "
      >
        <input
          type="radio"
          name="radio-group"
          className="hidden"
          id="radio1"
          onChange={handleRadioChange}
        />
        <label
          className=" cursor-pointer rounded border-2 border-solid
      border-gray-400  pt-4 text-white  after:ml-[83%]  after:flex
      after:h-7  after:w-7 after:rounded-full
      after:border-4 after:border-solid after:border-gray-400   hover:border-[#32cd32] xsMobile:h-44 xsMobile:w-[80%] xsMobile:after:-mt-36 miniMobile:h-44 miniMobile:w-[80%] miniMobile:after:-mt-32 mobile:h-44 mobile:w-[80%] mobile:after:-mt-32 miniTablet:h-44 miniTablet:w-[80%] miniTablet:after:-mt-[7.5rem] tablet:h-48 tablet:w-[80%] tablet:after:-mt-[7.5rem] miniLaptop:h-48 miniLaptop:w-[80%]  miniLaptop:after:-mt-[8rem] laptop:h-56 laptop:w-[80%] laptop:after:-mt-[8.5rem] desktop:h-56 desktop:w-[40%] desktop:after:-mt-[8.5rem] largeDesktop:h-56 largeDesktop:w-[30%] largeDesktop:after:-mt-[11.5rem]"
          htmlFor="radio1"
        >
          <pre className="hidden xsMobile:ml-[5%] xsMobile:mt-4 xsMobile:inline-block xsMobile:text-[130%] miniMobile:ml-[5%] miniMobile:inline-block miniMobile:text-[135%] desktop:ml-[5%] desktop:mt-3 desktop:inline-block desktop:text-[185%] largeDesktop:ml-[5%] largeDesktop:mt-3 largeDesktop:inline-block largeDesktop:text-[190%]">
            <FaHammer className="mb-3" />
            I’m a{"\n"}professional,{"\n"}looking for work.
          </pre>
          <pre className="hidden mobile:ml-[5%] mobile:mt-2 mobile:inline-block mobile:text-[170%] miniTablet:ml-[5%] miniTablet:mt-2 miniTablet:inline-block miniTablet:text-[170%] tablet:ml-[5%] tablet:mt-4 tablet:inline-block tablet:text-[170%] miniLaptop:ml-[5%] miniLaptop:mt-4 miniLaptop:inline-block miniLaptop:text-[185%] laptop:ml-[5%] laptop:mt-6 laptop:inline-block laptop:text-[195%]">
            <FaHammer className="mb-3" />
            I’m a professional,{"\n"}looking for work.
          </pre>
          <pre className="hidden">
            <FaHammer className="mb-3" />
            I’m a professional, looking for work.
          </pre>
        </label>{" "}
        <input
          type="radio"
          name="radio-group"
          className="hidden"
          id="radio2"
          onChange={handleRadioChange}
        />
        <label
          className=" cursor-pointer rounded
      border-2 border-solid border-gray-400 pt-4 text-white 
      after:ml-[83%]  after:flex after:h-7
      after:w-7 after:rounded-full after:border-4 after:border-solid after:border-gray-400 hover:border-[#32cd32] xsMobile:h-44 xsMobile:w-[80%] xsMobile:after:-mt-36  miniMobile:h-44 miniMobile:w-[80%] miniMobile:after:-mt-32 mobile:h-44 mobile:w-[80%] mobile:after:-mt-32 miniTablet:h-44 miniTablet:w-[80%] miniTablet:after:-mt-[7.5rem]  tablet:h-48 tablet:w-[80%] tablet:after:-mt-[7.5rem] miniLaptop:h-48 miniLaptop:w-[80%]  miniLaptop:after:-mt-[8rem] laptop:h-56 laptop:w-[80%] laptop:after:-mt-[8.5rem] desktop:h-56 desktop:w-[40%] desktop:after:-mt-[8.5rem] largeDesktop:h-56 largeDesktop:w-[30%] largeDesktop:after:-mt-[11.5rem]"
          htmlFor="radio2"
        >
          <pre className=" hidden xsMobile:ml-[5%] xsMobile:mt-4 xsMobile:inline-block xsMobile:text-[130%] miniMobile:ml-[5%] miniMobile:inline-block miniMobile:text-[135%] desktop:ml-[5%] desktop:mt-3 desktop:inline-block desktop:text-[185%] largeDesktop:ml-[5%] largeDesktop:mt-3 largeDesktop:inline-block largeDesktop:text-[190%]">
            <FaUser className="mb-3" />
            I’m a client {"\n"}Looking to{"\n"}hire.
          </pre>

          <pre className="hidden mobile:ml-[5%] mobile:mt-2 mobile:inline-block mobile:text-[170%]  miniTablet:ml-[5%] miniTablet:mt-2 miniTablet:inline-block miniTablet:text-[175%] tablet:ml-[5%] tablet:mt-4 tablet:inline-block tablet:text-[170%]  miniLaptop:ml-[5%] miniLaptop:mt-4 miniLaptop:inline-block miniLaptop:text-[185%] laptop:ml-[5%] laptop:mt-6 laptop:inline-block laptop:text-[195%]">
            <FaUser className="mb-3" />
            I'm a client{"\n"}looking to hire.
          </pre>
          <pre className="hidden ">
            <FaUser className="mb-3" />
            I'm a client looking to hire.
          </pre>
        </label>
      </div>
      <SignupBtns selectedRadio={selectedRadio} />
    </>
  );
}

export default SignupOptions;
