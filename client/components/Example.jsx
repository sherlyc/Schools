import React from "react";
import Pagination from "./Pagination";
import _ from "underscore";

class App extends React.Component {
  constructor() {
    super();

    // an example array of items to be paged
    var exampleItems = _.range(1, 151).map(i => {
      return { id: i, name: "Item " + i };
    });

    this.state = {
      exampleItems: exampleItems,
      pageOfItems: []
    };

    // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="text-center">
            <h1>School List with Pagination Test</h1>
            {this.state.pageOfItems.map(item =>
              <div key={item.id}>
                {item.name}
              </div>
            )}
            <Pagination
              items={this.state.exampleItems}
              onChangePage={this.onChangePage}
            />
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default App;
