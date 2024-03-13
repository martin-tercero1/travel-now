

function Question({question, answer}) {
  return (
    <div>
      <p className="text-xl font-medium text-primary dark:text-white">{question}</p>
      <p className="text-md pt-2 dark:text-white">
        {answer}
      </p>
    </div>
  );
}

export default Question