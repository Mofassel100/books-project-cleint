/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSingleBookQuery } from '../redux/Fetures/books/booksApi';

const BookDetails = () => {
  const { id } = useParams();
  const { data: book, isLoading, error } = useSingleBookQuery(id);
  if (isLoading) {
    return <div>Loadin....</div>;
  }
  console.log(id, book, isLoading, error);
  return (
    <div>
      <h1>Ami books Details</h1>
    </div>
  );
};

export default BookDetails;
