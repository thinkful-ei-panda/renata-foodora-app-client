import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RestaurantDishDelete from './RestaurantDishDelete';
import RestaurantEdit from './RestaurantEdit';
import RestaurantLanding from './RestaurantLanding';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});
describe('<RestaurantDishDelete />', () => {
    it('renders without crashing', () => {
        mount(
        <BrowserRouter>
            <RestaurantDishDelete />
        </BrowserRouter>,
        );
    });
});

describe('<RestaurantEdit />', () => {
    it('renders without crashing', () => {
        mount(
        <BrowserRouter>
            <RestaurantEdit />
        </BrowserRouter>,
        );
    });
});

describe('<RestaurantLanding />', () => {
    it('renders without crashing', () => {
        mount(
        <BrowserRouter>
            <RestaurantLanding />
        </BrowserRouter>,
        );
    });
});