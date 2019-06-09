import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../screen.less';
import Item from './Item';

class AccordionItems extends Component {
  render() {
    const { items = [] } = this.props;

    return (
      <div>
        {
          items.map((item, idx) => <Item item={item} idx={idx} />)
        }
      </div>
    );
  }
}

export default withRouter(AccordionItems);
