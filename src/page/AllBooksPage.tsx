/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from 'react';
import { useGetBooksQuery } from '../redux/Fetures/books/booksApi';
import { IBooks } from '../types/globalTypes';

const AllBooksPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const handleGenreChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedGenre(event.target.value as string);
  };

  const handleYearChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedYear(event.target.value as string);
  };
  const { data, isLoading, isError } = useGetBooksQuery(undefined);
  if (isLoading) {
    return <div>Loadin ......</div>;
  }
  if (isError) {
    return <div>Eroors...</div>;
  }
  const books: IBooks[] = data?.data;
  console.log(books);
  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchTerm(event.target.value);
  };
  const filteredBooks = books.filter(book => {
    // const formattedPublicationDate = format(book.publication, "yyy");

    return (
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchTerm.toLowerCase())
      // ||
      // book.publication
      //   .toLowerCase()
      //   .includes(searchTerm.toLowerCase() || searchTerm.toUpperCase())

      //
      // (selectedGenre === "" || book.genre === selectedGenre) &&
      // (selectedYear === "" || formattedPublicationDate === selectedYear)
    );
  });
  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto mt-5">
      <div
        className="col-span-3
      mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky top-16 h-[calc(100vh-80px)]"
      >
        <input
          type="text"
          placeholder="Search Books"
          value={searchTerm}
          onChange={handleSearchTermChange}
          className="input input-bordered input-secondary w-full max-w-xs"
        />
      </div>
      <div className="col-span-9  grid  w-full gap-10 pb-15">
        <div className="grid g">
          <div className="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid">
            {filteredBooks.map((book, index) => (
              // card add
              <div
                key={index}
                className="card w-[300px] bg-base-100 shadow-xl rounded-2xl h-[450px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all 
                my-2 gap-2"
              >
                <figure className="px-2 pt-2">
                  <img src={book?.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center justify-center">
                  <h2 className="card-title">{book?.title}</h2>
                  <p>${book?.price}</p>
                  <p>{book?.author}</p>
                  <p>{book?.publication}</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>

              //     <li key={index}>
              //       <strong>{book.title}</strong> by {book.author} ({book.genre}),
              //       published on{' '}
              //       {
              //         // format(book.publication, "dd MMMM yyyy")
              //         // ||
              //         book.publication
              //       }
              //     </li>
              //
              // </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooksPage;
