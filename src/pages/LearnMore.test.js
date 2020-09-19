import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LearnMore from './LearnMore';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('<LearnMore />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <LearnMore />
      </BrowserRouter>,
    );
  });
});