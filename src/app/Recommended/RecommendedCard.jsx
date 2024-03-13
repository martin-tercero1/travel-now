function RecommendedCard({name, description, styles= {}}) {
    const { primary_bg = "bg-norway", secondary_bg = "bg-secondary", color = "text-white", dark, darkText } = styles
  return (
    <div className="shadow-md h-64 flex-none transform transition-all rounded-b-lg hover:-translate-y-4 hover:shadow-xl">
      <div className={`h-3/5 rounded-t-lg ${primary_bg} bg-cover`}></div>
      <div className={`h-2/5 w-48 flex flex-col space-x-4 justify-center pb-4 space-y-2 rounded-b-lg ${secondary_bg} ${dark}`}>
        <p className={`${color} ${darkText} text-bold text-md ml-4`}>{name}</p>
        <p className={`${color} ${darkText} text-sm ml-4`}>{description}</p>
      </div>
    </div>
  );
}

export default RecommendedCard