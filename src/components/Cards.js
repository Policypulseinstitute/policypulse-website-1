import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Explore our Latest Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/bkg-farm.png'
              text='This is another important project'
              label='Policy'
              path='/project1'
            />
            <CardItem
              src='images/projects/img-6.jpg'
              text='This is another important project'
              label='Data Analysis'
              path='/project1'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/projects/img-2.jpg'
              text='This is another important project'
              label='Digital Currencies'
              path='/project1'
            />
            <CardItem
              src='images/projects/img-8.jpg'
              text='This is another important project'
              label='Data Analysis'
              path='/project1'
            />
            <CardItem
              src='images/projects/img-3.jpg'
              text='This is another important project'
              label='Politics'
              path='/project1'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
