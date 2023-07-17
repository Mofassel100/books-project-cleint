/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from 'react';
import { useGetBooksQuery } from '../redux/Fetures/books/booksApi';
import { IBooks } from '../types/globalTypes';
import { Link } from 'react-router-dom';

const AllBooksPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // const [selectedGenre, setSelectedGenre] = useState('');
  // const [selectedYear, setSelectedYear] = useState('');
  // const handleGenreChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  //   setSelectedGenre(event.target.value as string);
  // };

  // const handleYearChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  //   setSelectedYear(event.target.value as string);
  // };
  const { data, isLoading, isError } = useGetBooksQuery(undefined);
  if (isLoading) {
    return <div>Loadin ......</div>;
  }
  if (isError) {
    return <div>Eroors...</div>;
  }
  const books: IBooks[] = data?.data;

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
      mr-10 space-y-5 border  rounded-2xl border-gray-200/80 p-5 self-start sticky top-16 h-[calc(100vh-80px)]"
      >
        <input
          type="text"
          placeholder="Search Books"
          value={searchTerm}
          onChange={handleSearchTermChange}
          className="input input-bordered input-secondary w-full max-w-xs"
        />
      </div>
      <div className="col-span-9   grid  w-full gap-10 pb-15">
        <div className="grid g">
          <div className="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-2  grid">
            {filteredBooks.map((book, index) => (
              // card add
              <div
                key={index}
                className=" card  w-80 bg-base-100 border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all 
                my-2 gap-2"
              >
                <Link to={`/book-details/${book._id}`}>
                  <figure className="">
                    <img
                      src={book?.image}
                      alt=""
                      className="rounded-xl w-[250px] h-[150px] "
                    />
                  </figure>
                </Link>

                <div className="card-body items-center text-center justify-center">
                  <h2 className="">{book?.title}</h2>
                  <div>
                    <p>{book.author}</p>
                    <span className="pr-2">{book.genre}</span>
                    <span>{book.publication}</span>
                  </div>

                  <div className="card-actions"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooksPage;
