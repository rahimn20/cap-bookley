import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from './Hero/Hero';
import Separator from './Separator/Separator';
import Featured from './Featured/Featured';
import TopSelling from './TopSelling/TopSelling';
import RecentlyAdded from './RecentlyAdded/RecentlyAdded';
import Newsletter from './Newsletter/Newsletter';
import Footer from '../Footer/Footer';
import { useContext } from 'react';
import BookContext from '../context/books';

function Landing() {
  const { getBooks } = useContext(BookContext);
  React.useEffect(() => {
    const fetchBook = async () => {
      await getBooks();
    };
    fetchBook();
  }, [getBooks]);

  return (
    <>
      <Navbar />
      <Hero />
      <Separator />
      <Featured />
      <TopSelling />
      <RecentlyAdded />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Landing;
