import React, { useState } from 'react'

function Passengers({ state, send }) {
  const [passengerName, setPassengerName] = useState("");

  const { passengers } = state.context;
  

  const goToTickets = () => {
    send({ type: 'DONE' })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    send({ type: "ADD", newPassenger: passengerName });
    setPassengerName("");
  }

  const onChangeInput = (e) => {
    setPassengerName(e.target.value);
  }

  return (
    <div>
      {passengers?.map((passenger, index) => (
        <p className='text-white' key={`passenger-${index}`}>{passenger}</p>
      ))}
      <form onSubmit={onSubmit}>
        <input
          value={passengerName}
          onChange={onChangeInput}
          className="bg-white"
          type="text"
          placeholder="Write the full name of a passenger"
        />
        <button type='button' className='bg-white' onClick={onSubmit}>Add passenger</button>
        <button type='button' className="bg-white" onClick={goToTickets}>
          See my ticket
        </button>
      </form>
    </div>
  );
}

export default Passengers