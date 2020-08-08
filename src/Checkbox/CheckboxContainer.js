import React from "react";
import Checkbox from "../Checkbox/Checkbox";
import DishAPIService from "../Service/DishAPIService";

export default class CheckboxContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedItems: new Map(),
      tags: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async handleChange(event) {
    const item = event.target.name;
    const isChecked = event.target.checked;
    await this.setState((prevState) => ({
      checkedItems: prevState.checkedItems.set(item, isChecked),
    }));
  }

  async componentDidMount() {
    await DishAPIService.getAllTags().then((tags) => {
      this.setState({ tags: tags });
    });

    // initialize checkedItems map with "false" for all tags
    this.state.tags.forEach((e) => {
      this.setState((prevState) => ({
        checkedItems: prevState.checkedItems.set(e.tag, false),
      }));
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.tags.map((tag) => (
          <label key={tag.id}>
            {tag.tag}
            <Checkbox
              name={tag.tag}
              checked={this.state.checkedItems.get(tag.tag)}
              onChange={this.handleChange}
            />
          </label>
        ))}
      </React.Fragment>
    );
  }
}


//TODO 1) context of checkbox
//TODO 2) checkbox container needs to come with array of integers tag_id
//TODO 3) get checkedItems out of checkedItems map
//TODO 4) use keys to look up ids
//TODO 5) the result is array of ids, PUT IN CONTEXT
//TODO 6) DIsh has to read the array ids and send to the backend