import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import apis from '@apis';

const paths = [
  '/main/award-activity',
];

class AccordionItem extends Component {
  render() {
    const { items } = this.props;

    return (
      <div>
        {
          items.map((item, idx) => (
            <Link
              to={`${paths[idx]}/${item.eventId}`}
              style={{ fontSize: 12 }}
              key={idx}
            >
              {item.eventName}
              {item.startAt ? new Date(item.startAt).toLocaleDateString() : ''}
              {' ~ '}
              {item.startAt ? new Date(item.startAt).toLocaleDateString() : ''}
            </Link>
          ))
        }
      </div>
    );
  }
}

export default withRouter(AccordionItem);
