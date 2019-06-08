import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../screen.less';

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
              <div className="flex-jcsb">
                <span>{item.eventName}</span>
                <span>
                  {item.startAt ? new Date(item.startAt).toLocaleDateString() : ''}
                  {' ~ '}
                  {item.startAt ? new Date(item.startAt).toLocaleDateString() : ''}
                </span>
              </div>
            </Link>
          ))
        }
      </div>
    );
  }
}

export default withRouter(AccordionItem);
