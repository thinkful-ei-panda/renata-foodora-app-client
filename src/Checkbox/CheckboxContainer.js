import React from 'react';
//import PropTypes from 'prop-types';
import Checkboxes from '../Checkbox/Checkboxes';
import Checkbox from '../Checkbox/Checkbox';

export default class CheckboxContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map(),
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const item = event.target.name;
    const isChecked = event.target.checked;
    this.setState(prevState => 
      ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  }

  render() {
    return (
      <React.Fragment>
        {
          Checkboxes.map(item => (
            <label key={item.key}>
              {item.name}
              <Checkbox 
              name={item.name} 
              checked={this.state.checkedItems.get(item.name)} 
              onChange={this.handleChange} />
            </label>
          ))
        }
      </React.Fragment>
    );
  }
}