function FeaturedCard({ name, description, background, lgStyle, nameLgStyle }) {
  return (
    <div
      className={`w-full h-96 ${background} bg-cover rounded-xl ${lgStyle} mb-8`}
    >
      <p
        className={`text-3xl px-8 pt-8 pb-2 font-semibold text-white ${nameLgStyle}`}
      >
        {name}
      </p>
      <p className={`text-sm pl-8 text-white ${nameLgStyle} mr-24 lg:text-lg`}>{description}</p>
    </div>
  );
}

export default FeaturedCard