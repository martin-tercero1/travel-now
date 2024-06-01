import Passengers from "./Passengers";
import Search from "./Search";
import Tickets from "./Tickets";
import Welcome from "./Welcome";

function Home({ state, send }) {
// TO DO - CREATE A COMPONENT THAT WILL BE VISIBLE IN ALL OF THE STATES
// TITLE, CANCEL BUTTON 

  const goToWelcome = () => {
    send({ type: 'CANCEL', passengers: [], selectedCountry: "" });
  }

  console.log(state.context)

  if (state.matches("initial")) return <Welcome send={send}/>

  return (
    <div className="w-full h-3/4">
      {!state.matches("initial") &&
        !state.matches("tickets") && (
          <button onClick={goToWelcome} className="bg-white">
            Cancel
          </button>
        )}
      {state.matches("search") && <Search state={state} send={send} />}
      {state.matches("passengers") && <Passengers state={state} send={send} />}
      {state.matches("tickets") && <Tickets context={state.context} send={send} />}
    </div>
  );
}

export default Home