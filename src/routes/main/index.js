import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; 
import NavHeader from '@modules/NavHeader';
import LogoBar from '@modules/LogoBar';
import Admin from '../admin';
import Shopping from '../shopping';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemType: '/main',
    };
  }

  componentDidMount() {
    console.log('this.props: ', this.props);
    
    this.setState({
      itemType: this.props.location.pathname,
    });
  }

  activeRoute = (itemType) => {
    console.log('itemType: ', itemType);
    this.setState({
      itemType,
    }, () => {
      this.props.history.push(itemType);
    });
  }

  render() {
    const { itemType = 'shopping' } = this.state;

    return (
      <div style={{ height: '100%' }}>
        <NavHeader activeRoute={this.activeRoute} />
        <LogoBar activeRoute={this.activeRoute} />
        {
          itemType.indexOf('/main/shopping') !== -1
            ? (
              <Shopping />
            ) : (
              <Admin />
            )
        }
      </div>
    );
  }
}

export default withRouter(Main);
