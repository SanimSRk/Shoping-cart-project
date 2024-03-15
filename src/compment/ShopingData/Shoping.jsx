import { useState } from 'react';
import Shop from './Shop';
import { useEffect } from 'react';

const Shoping = ({ handilClick }) => {
  const [shop, setShop] = useState([]);
  useEffect(() => {
    fetch('shopData.json')
      .then(res => res.json())
      .then(data => setShop(data));
  }, []);

  return (
    <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-8 ">
      {shop.map(shop => (
        <Shop key={shop.id} shop={shop} handilClick={handilClick}></Shop>
      ))}
    </div>
  );
};

export default Shoping;
