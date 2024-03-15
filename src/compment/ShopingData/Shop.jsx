const Shop = ({ shop, handilClick }) => {
  const { image, title, description, category, price } = shop;

  return (
    <div className="p-5 grid shadow-md items-end">
      <div>
        <img className="w-full object-cover" src={image} alt="" />
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">{title.slice(0, 36)}</h2>
        <p className="my-3 ">{description.slice(0, 100)}</p>
        <h2 className="text-xl font-semibold">Category : {category} </h2>
        <h2 className="text-xl font-semibold mt-2">Price : {price}$</h2>
        <button
          onClick={() => handilClick(shop)}
          className="w-full mt-4 btn bg-blue-400 text-white"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Shop;
