/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useParams } from 'react-router-dom';
import { useSingleBookQuery } from '../redux/Fetures/books/booksApi';

const BookDetails = () => {
  const { id } = useParams();
  const { data: book, isLoading, error } = useSingleBookQuery(id);
  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="mx-auto grid justify-center items-center">
      <div className="grid grid-cols-1  lg:grid-cols-2 md:grid-cols-2 px-10 mx-10  mx-auto  border-b  border-gray-300">
        <div className="w-[60%]">
          <img src={book?.image} alt="" />
        </div>
        <div className="w-[40%] space-y-3">
          <h1 className="text-3xl font-semibold">Name:{book?.title}</h1>
          <p className="text-xl">Publication: {book?.publication}</p>
          <p className="text-xl">Genre: {book?.genre}</p>
          <p className="text-xl">Author: {book?.author}</p>

          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
