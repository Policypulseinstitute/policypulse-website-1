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
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Policy'
              path='/expertise'
            />
            <CardItem
              src='images/bkg-farm.png'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Data Analysis'
              path='/expertise'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/bkg-farm.png'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Digital Currencies'
              path='/expertise'
            />
            <CardItem
              src='images/bkg-farm.png'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Data Analysis'
              path='/team'
            />
            <CardItem
              src='images/bkg-farm.png'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Politics'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
