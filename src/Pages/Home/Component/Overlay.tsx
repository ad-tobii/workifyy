function Overlay() {
  return (
    <div className="absolute inset-0 z-50 w-full h-[100vh] miniLaptop:h-[120vh]">
      <div className="absolute inset-0 bg-black bg-opacity-50 "></div>
      <div className="absolute inset-x-0 top-0 bottom-20 flex justify-center items-center">
        <div className="bg-gradient-to-b from-[#2c3e50] to-[#000000] opacity-50"></div>
      </div>
    </div>
  );
}

export default Overlay;
