import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Copyright from './Copyright';
import FAQ from './FAQ';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});
describe('<About />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <About />
      </BrowserRouter>,
    );
  });
});

describe('<Contact />', () => {
    it('renders without crashing', () => {
      mount(
        <BrowserRouter>
          <Contact />
        </BrowserRouter>,
      );
    });
  });

  describe('<Copyright />', () => {
    it('renders without crashing', () => {
      mount(
        <BrowserRouter>
          <Copyright />
        </BrowserRouter>,
      );
    });
  });

  describe('<Help />', () => {
    it('renders without crashing', () => {
      mount(
        <BrowserRouter>
          <FAQ />
        </BrowserRouter>,
      );
    });
  });