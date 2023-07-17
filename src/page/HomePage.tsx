/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Banner from '../Component/ui/Banner';
import { useGetBooksQuery } from '../redux/Fetures/books/booksApi';
import { IBooks } from '../types/globalTypes';

const HomePage = () => {
  const { data } = useGetBooksQuery(undefined);

  console.log(
    data?.data?.map((datas: IBooks) =>
      console.log(datas.title, 'author:', datas.author),
    ),
  );

  return (
    <div>
      <Banner />
      <div></div>
    </div>
  );
};

export default HomePage;
