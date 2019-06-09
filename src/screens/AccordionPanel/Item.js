import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../screen.less';

const paths = [
  '/main/award-activity',
];

class Item extends Component {
  render() {
    const { item = {}, idx = 0 } = this.props;
    const {
      eventId = '',
      eventName = '',
      startAt = 1559009317,
      endAt = 1561687717,
    } = item;

    return (
      <div>
        <Link
          to={`${paths[idx]}/${eventId}`}
          style={{ fontSize: 12 }}
          key={idx}
        >
          <div className="flex-jcsb">
            <span>{eventName}</span>
            <span>
              {startAt ? new Date(startAt).toLocaleDateString() : ''}
              {' ~ '}
              {endAt ? new Date(endAt).toLocaleDateString() : ''}
            </span>
          </div>
        </Link>
      </div>
    );
  }
}

export default withRouter(Item);
