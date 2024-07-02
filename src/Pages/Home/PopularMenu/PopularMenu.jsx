import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-20">
      <SectionTitle
        heading={"From our menu"}
        subHeading={"Popular Menu"}
      ></SectionTitle>
      <div className="flex flex-col items-center">
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {popular.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <button className="btn btn-outline border-0 border-b-4 mt-4">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
