import FeaturedCard from './FeaturedCard';

function Featured() {
  return (
    <div className="p-6 h-auto w-full lg:px-6 mb-3" id="featured">
      <p className="text-3xl text-primary font-semibold mt-4 pb-6 dark:text-white">
        Featured Stays
      </p>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <FeaturedCard
          name={"Chicago"}
          nameLgStyle={"lg:text-black"}
          lgStyle={"lg:bg-center"}
          description={"2 rooms, bathroom and kitchen."}
          background={"bg-chicago"}
        />
        <div className=" w-full lg:flex lg:h-full lg:w-full lg:space-x-4 ">
          <FeaturedCard
            lgStyle="lg:h-auto"
            name={"Los Angeles"}
            description={"4 rooms, 3 bathrooms,  kitchen and private pool."}
            background={"bg-LA"}
          />
          <div className="lg:w-96">
            <FeaturedCard
              name={"Miami"}
              description={
                "3 rooms, 2 bathrooms,  kitchen and amazing sea view."
              }
              background={"bg-miami"}
            />
            <FeaturedCard
              name={"Bali"}
              description={"2 rooms, 2 bathrooms,  kitchen and private pool"}
              background={"bg-bali"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured