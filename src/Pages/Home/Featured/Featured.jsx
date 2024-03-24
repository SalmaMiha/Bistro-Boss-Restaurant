import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <section className="my-10 pt-8 bg-fixed featured-item text-white">
      <SectionTitle
        heading={"Featured Item"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-10 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md: ml-10 space-y-2">
          <p>March 20, 2024</p>
          <p className="uppercase">Where can I get some?</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
            velit quod. Atque excepturi fuga distinctio molestias iste
            temporibus voluptate ab nesciunt qui? Ratione ipsam dolor aut hic,
            obcaecati qui sapiente.
          </p>
          <button className="btn btn-outline border-0 border-b-4 text-white">
            Order now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
