import { GetServerSideProps } from 'next';

interface Book {
    title: string;
    author: string;
    genre: string;
    description: string;
    isbn: string;
    published: string; // Assuming the published date is a string
    publisher: string;
  }

const BookDetailsPage = ({ book }: { book: Book }) => {
  return (
    <div>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Description: {book.description}</p>
      <p>ISBN: {book.isbn}</p>
      <p>Published Date: {book.published}</p>
      <p>Publisher: {book.publisher}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const id = params?.id as string;

    const res = await fetch(`https://fakerapi.it/api/v1/books/${id}`);
    const data = await res.json();
  
    return {
      props: {
        book: data.data,
      },
    };
};

export default BookDetailsPage;