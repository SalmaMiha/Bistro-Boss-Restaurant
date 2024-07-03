import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, coverImg, title }) => {
  return (
    <div>
      {title && <Cover img={coverImg} title={title}></Cover>}

      <div className="grid md:grid-cols-2 gap-4 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      {title && (
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-4 mb-10">
            Order Your Favorite Food
          </button>
        </Link>
      )}
    </div>
  );
};

export default MenuCategory;
