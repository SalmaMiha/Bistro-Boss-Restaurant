const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto md:w-3/12 my-8 text-center">
      <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>
      <h2 className="text-3xl uppercase border-y-2 py-2">{heading}</h2>
    </div>
  );
};

export default SectionTitle;
