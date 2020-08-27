import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';
import Main from './Main';
import NavBar from './NavBar';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});
describe('<Footer />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
  });
});

describe('<Main />', () => {
    it('renders without crashing', () => {
      mount(
        <BrowserRouter>
          <Main />
        </BrowserRouter>,
      );
    });
  });
  
  describe('<NavBar />', () => {
    it('renders without crashing', () => {
      mount(
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>,
      );
    });
  });