import React from 'react';
import CarouselComponent from '../components/Home/CarouselComponent';
import CategoryComponent from '../components/Home/CategoryComponent';
import NewArrivalsComponent from '../components/Home/NewArrivalsComponent';
import ReviewsComponent from '../components/Home/ReviewsComponent';

const HomePage = () => {

  return (
    <div>
      <CarouselComponent/>
      <CategoryComponent/>
      <NewArrivalsComponent />
      <ReviewsComponent />
    </div>
  );
};

export default HomePage;