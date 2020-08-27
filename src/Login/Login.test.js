import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login';
import FullLogin from './FullLogin';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});
describe('<Login />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
    );
  });
});

describe('<FullLogin />', () => {
    it('renders without crashing', () => {
      mount(
        <BrowserRouter>
          <FullLogin />
        </BrowserRouter>,
      );
    });
  });