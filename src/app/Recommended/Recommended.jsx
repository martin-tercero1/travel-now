
import Card from './RecommendedCard';
function Recommended() {
  return (
    <div id="recommended" className="h-auto p-6 mt-10">
      <h2 className="text-3xl font-semibold text-primary dark:text-white">Our Recommendations</h2>
      <div className="h-72 flex mt-6 items-center overflow-x-auto overscroll-x-contain space-x-6 overflow-y-hidden">
        <Card
          name={"Normay"}
          description={"Beautiful landscapes"}
          styles={{
            primary_bg: "bg-norway",
            dark: "dark:bg-gray-700",
            darkText: "dark:text-white",
          }}
        ></Card>
        <Card
          name={"New York"}
          description={"Concrete jungle"}
          styles={{
            primary_bg: "bg-new_york",
            color: "text-accent",
            secondary_bg: "bg-white",
            dark: "dark:bg-gray-800",
            darkText: "dark:text-white",
          }}
        ></Card>
        <Card
          name={"Yosemite"}
          description={"A break form the world"}
          styles={{
            primary_bg: "bg-yosemite",
            dark: "dark:bg-gray-700",
            darkText: "dark:text-white",
          }}
        ></Card>
        <Card
          name={"Seattle"}
          description={"Big City"}
          styles={{
            primary_bg: "bg-seattle",
            color: "text-accent",
            secondary_bg: "bg-white",
            dark: "dark:bg-gray-800",
            darkText: "dark:text-white",
          }}
        ></Card>
        {/* <Card name={""} description={""} background={""}></Card>
        <Card name={""} description={""} background={""}></Card>
        <Card name={""} description={""} background={""}></Card>
        <Card name={""} description={""} background={""}></Card>
        <Card name={""} description={""} background={""}></Card>
        <Card name={""} description={""} background={""}></Card> */}
      </div>
    </div>
  );
}

export default Recommended