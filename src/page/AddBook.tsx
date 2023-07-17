/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import { IBooks } from '../types/globalTypes';
import { useCreateBookMutation } from '../redux/Fetures/books/booksApi';

const AddBook = () => {
  const [createBook, { isError, isLoading, isSuccess }] =
    useCreateBookMutation();
  const [bookData, setBookData] = useState<IBooks>({
    title: '',
    author: '',
    publication: '',
    genre: '',
  });
  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBookData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      title: bookData.title,
      author: bookData.author,
      publication: bookData.publication,
      genre: bookData.genre,
      price: bookData.price,
      image: bookData.image,
    };

    await createBook(data);
    // dispatch(addBook(bookData));
    setBookData({
      title: '',
      author: '',
      publication: '',
      genre: '',
    });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl text-center font-bold">Add New Book</h1>
      <form
        className="p-10 border border-spacing-1 rounded"
        onSubmit={handleSubmit}
      >
        <div className="grid lg:grid-cols-3 justify-center items-center  lg:max-w-[800px] max-w-[300px] md:max-w-[500px]  md:grid-cols-2 grid-cols-1 mx-auto">
          <div className="py-3">
            <label htmlFor="title">Title:</label>
            <input
              className=" border hover:p-3  rounded border-green-400"
              type="text"
              id="title"
              name="title"
              value={bookData.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="py-3" htmlFor="price">
              Price:
            </label>
            <input
              className=" border hover:p-3 rounded border-green-400"
              type="number"
              id="price"
              name="price"
              value={bookData.price || ''}
              onChange={handleChange}
            />
          </div>
          <div className="py-3">
            <label htmlFor="image">Image:</label>
            <input
              className=" border hover:p-3 rounded border-green-400"
              type="url"
              id="image"
              name="image"
              value={bookData.image || ''}
              onChange={handleChange}
            />
          </div>
          <div className="py-3">
            <label htmlFor="author">Author:</label>
            <input
              className=" border hover:p-3 rounded border-green-400"
              type="text"
              id="author"
              name="author"
              value={bookData.author}
              onChange={handleChange}
            />
          </div>
          <div className="py-3">
            <label htmlFor="publication">Publication:</label>
            <input
              className=" border hover:p-3 rounded border-green-400"
              type="date"
              id="publication"
              name="publication"
              value={bookData.publication.toString()}
              onChange={handleChange}
            />
          </div>
          <div className="py-3">
            <label htmlFor="genre">Genre:</label>
            <input
              className=" border hover:p-3 rounded border-green-400"
              type=""
              id="genre"
              name="genre"
              value={bookData.genre}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="text-center">
          <button className="btn" type="submit">
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
