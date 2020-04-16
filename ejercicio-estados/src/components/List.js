import React from 'react';
import ItemList from './ListItem';

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <ItemList series={this.props.users} />
      </li>
    );
  }
}

export default List;
