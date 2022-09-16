import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from './Hero/Hero';
import Separator from './Separator/Separator';
import Featured from './Featured/Featured';
import TopSelling from './TopSelling/TopSelling';
import RecentlyAdded from './RecentlyAdded/RecentlyAdded';
import Newsletter from './Newsletter/Newsletter';
import Footer from '../Footer/Footer';

function Landing() {
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
