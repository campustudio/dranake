import React, { Component } from 'react';
import InvitedUserCard from '@h5components/InvitedUserCard';

export default class Invitees extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { invitees } = this.props;
    console.log('invitees: ', invitees);

    return (
      <div>
        {
          invitees.map((ele, idx) => {
            const {
              nickName = '',
              avatarUrl = '',
              subscriptionPackage = 2,
              createdAt = 1548847409,
            } = ele;
            console.log('ele: ', ele);

            return <InvitedUserCard createdAt={createdAt} subscriptionPackage={subscriptionPackage} nickName={nickName} avatarUrl={avatarUrl} key={idx} />;
          })
        }
      </div>
    );
  }
}
