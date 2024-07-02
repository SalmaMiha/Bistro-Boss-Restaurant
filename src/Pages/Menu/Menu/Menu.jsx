import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      {/* main cover */}
      <Cover img={menuImg} title={"Our Menu"}></Cover>

      {/* today's offer */}
      <SectionTitle
        subHeading={"Don't miss"}
        heading={"Today's offer"}
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>

      {/* dessert */}
      <MenuCategory
        items={dessert}
        coverImg={dessertImg}
        title={"Desserts"}
      ></MenuCategory>

      {/* pizza */}
      <MenuCategory
        items={pizza}
        coverImg={pizzaImg}
        title={"Pizzas"}
      ></MenuCategory>

      {/* salad */}
      <MenuCategory
        items={salad}
        coverImg={saladImg}
        title={"Salads"}
      ></MenuCategory>

      {/* soup */}
      <MenuCategory
        items={soup}
        coverImg={soupImg}
        title={"Soups"}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
