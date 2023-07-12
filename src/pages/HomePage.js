import React from 'react';
import CarouselComponent from '../components/Home/CarouselComponent';
import CategoryComponent from '../components/Home/CategoryComponent';
import NewArrivalsComponent from '../components/Home/NewArrivalsComponent';

const HomePage = () => {

  return (
    <div>
      <CarouselComponent/>
      <CategoryComponent/>
      <NewArrivalsComponent />
    </div>
  );
};

export default HomePage;