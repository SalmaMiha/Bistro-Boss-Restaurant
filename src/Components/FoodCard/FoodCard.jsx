const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} className="w-72" alt={name} />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mr-8 mt-4 px-2 py-0.5 rounded-lg">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title justify-center">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-gray-100 text-yellow-500 border-b-4 border-0 border-yellow-500">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
