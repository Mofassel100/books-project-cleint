/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Banner from '../Component/ui/Banner';
import { useGetBooksLimitQuery } from '../redux/Fetures/books/booksApi';
import { IBooks } from '../types/globalTypes';

const HomePage = () => {
  const { data, isLoading } = useGetBooksLimitQuery(undefined);
  if (isLoading) {
    return <div className="text-center">Loading....</div>;
  }

  const books: IBooks[] = data?.data;

  return (
    <div>
      <Banner />
      <div className="mx-auto my-10 grid">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-center items-cente mx-auto">
          {books.map(book => (
            <div className="card my-3 w-80 bg-base-100 shadow-xl hover:shadow-2xl hover:scale-[102%] transition-all ">
              <figure className="px-2 pt-2 ">
                <img
                  src={book?.image}
                  alt="Shoes"
                  className=" w-[250px] h-[200px]"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{book?.title}</h2>
                <p>{book?.genre}</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
