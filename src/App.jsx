import { useState } from 'react';
import './App.css';
import Shoping from './compment/ShopingData/Shoping';
import BookMark from './compment/bookMark/BookMark';

function App() {
  const [addBook, setBook] = useState([]);
  const handilClick = shop => {
    const isExist = addBook.find(item => item.id == shop.id);
    if (!isExist) {
      setBook([...addBook, shop]);
    } else {
      alert('do not click to cart');
    }
  };

  const deletHandlers = id => {
    const newAddBook = addBook.filter(item => item.id != id);
    setBook(newAddBook);
  };

  return (
    <>
      <div className="w-[90%] mx-auto mt-6">
        <div className="flex justify-between gap-5">
          <div className="lg:w-[75%] mx-auto">
            <Shoping handilClick={handilClick}></Shoping>
          </div>
          <div className="lg:w-[25%] mx-auto">
            <BookMark
              addBook={addBook}
              deletHandlers={deletHandlers}
            ></BookMark>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
