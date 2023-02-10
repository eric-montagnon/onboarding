/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import '@testing-library/jest-native/extend-expect';
import {render, screen, waitFor} from '@testing-library/react-native';

it('renders correctly', async () => {
  const nock = require('nock');
  nock('https://www.thecocktaildb.com')
    .get('/api/json/v1/1/filter.php')
    .reply(200, {
      drink: [
        {
          idDrink: 12,
          strDrink: 'OKAY',
          strDrinkThumb:
            'https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg',
          strCategory: 'Classic drink',
        },
      ],
    });
  render(<App />);

  await waitFor(() => {
    expect(screen.queryByTestId('loader')).not.toBeOnTheScreen();
  });

  expect(screen).toMatchSnapshot();
});
