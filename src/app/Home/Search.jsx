import { useState } from "react";

function Search({ state, send }) {
  const [destination, setDestination] = useState("");

  const { countries } = state.context;
    
  const goToPassengers = () => {
    send({ type: 'CONTINUE', selectedCountry: destination, passengers: []})
  }

  const handleSelectChange = (event) => {
    setDestination(event.target.value);
  }


  return (
    <div className="w-full h-full">
      <select name="" id="" onChange={handleSelectChange}>
        {countries?.map((country, index) => (
          <option key={`country-${index}`} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>

      <button className="bg-white" onClick={goToPassengers}>
        Continue
      </button>
    </div>
  );
}

export default Search