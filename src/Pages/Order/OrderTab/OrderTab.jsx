import FoodCard from "../../../Components/FoodCard/FoodCard";

const OrderTab = ({ item }) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-2 gap-5">
      {item.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTab;
