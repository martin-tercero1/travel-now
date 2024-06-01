

function Tickets( { context, send } ) {
  const finish = () => {
    send({ type: 'FINISH' });
  }

  return (
    <div>
      <span className="text-white">Tickets</span>
      <button className="bg-white" onClick={finish}>
        Finish
      </button>
      <div>
        {context.passengers.map((passenger, index) => (
          <p className="text-white" key={index}>
            {passenger}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Tickets