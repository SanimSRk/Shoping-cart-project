const BookMark = ({ addBook, deletHandlers }) => {
  return (
    <div className="shadow-md p-5 mb-4">
      <h2 className="text-center pb-4 text-3xl font-bold border-b-2">
        Add To cartd
      </h2>
      {addBook.map((addBooks, index) => (
        <div key={addBook.id} className="mt-4 shadow-md bg-slate-200 p-4">
          <div className="flex gap-3 items-center ">
            <p className=" font-semibold text-2xl">{index + 1} </p>
            <h2>{addBooks.title} </h2>
            <button onClick={() => deletHandlers(addBooks.id)} className="btn">
              delet
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookMark;
