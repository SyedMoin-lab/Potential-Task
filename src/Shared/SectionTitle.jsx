const SectionTitle = ({ title ,SubTitle}) => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-center">
        {title}
      </h2>
      <p className="py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl text-center">
        {SubTitle}
      </p>
    </div>
  );
};

export default SectionTitle;
