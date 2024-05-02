import { GetServerSideProps } from 'next';
import Link from 'next/link';

interface Book {
    title: string;
    author: string;
    genre: string;
    description: string;
    isbn: string;
    published: string; // Assuming the published date is a string
    publisher: string;
  }

const BookPage = ({ books }: { books: Book[] }) => {
  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.isbn}>
            <Link href={`/book/${book.isbn}`}>
              <a>
                {book.title} - {book.author}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://fakerapi.it/api/v1/books');
  const data = await res.json();

  return {
    props: {
      books: data.data,
    },
  };
};

export default BookPage;