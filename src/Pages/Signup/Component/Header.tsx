function Header() {
  return (
    <div className="mt-3 miniTablet:hidden">
      <h1 className="flex justify-center text-4xl text-white mobile:hidden miniTablet:hidden">
        Join as a client or professional
      </h1>
      <pre className="mt-12 hidden justify-center text-3xl text-white mobile:flex miniTablet:mt-10 miniTablet:flex miniTablet:text-4xl">
        Join as a client or
      </pre>
      <pre className="mt-2 hidden justify-center text-3xl text-white mobile:flex  miniTablet:mt-2 miniTablet:flex miniTablet:text-4xl">
        professional
      </pre>
    </div>
  );
}


export default Header