function Welcome({ send }) {
  const startBooking = () => {
    send({ type: "START" });
  };

  return (
    <div className="w-full h-3/4" id="home">
      <div className="w-full h-full">
        <div className="w-full h-full flex flex-col absolute space-y-96 py-4 items-center lg:space-y-0 lg:items-start lg:pt-48 lg:justify-start">
          <input
            className="outline-none p-3 rounded-full shadow-sm transition duration-300 focus-within:shadow-sm focus:ring-2 focus:w-11/12 lg:hidden"
            placeholder="San Francisco"
            type="search"
            name=""
            id=""
          />
          <div className="hidden h-auto lg:w-2/5 lg:flex pb-6">
            <p className="text-4xl ml-16">Find more locations like this one</p>
          </div>
          <button
            onClick={() => startBooking()}
            className="w-48 rounded-full bg-white text-lg text-primary font-semibold p-4 transition-all duration-500 ease-in-out hover:bg-primary hover:text-white transform hover:-translate-y-1 hover:scale-110 lg:ml-16 "
          >
            Explore
          </button>
        </div>
        <div className="w-full h-full lg:h-full lg:bg-sanFranciscoDesktop lg:bg-cover lg:bg-center">
          <img className="lg:hidden" src="/img/sanFrancisco.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Welcome