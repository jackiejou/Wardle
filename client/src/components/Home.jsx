import React from 'react';
import Navbar from './Navbar.jsx';
import Payment from './Payment.jsx';
import FeedContainer from './FeedContainer.jsx';
import MiniProfile from './MiniProfile.jsx';

class Home extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Payment/>
<<<<<<< HEAD
        <MiniProfile/>
        <FeedContainer 
          userFeed={this.props.userFeed && this.props.userFeed.items}
          globalFeed={this.props.globalFeed && this.props.globalFeed.items} />
=======
        <MiniProfile balance={this.props.balance}/>
        <Feed globalFeed={this.props.globalFeed && this.props.globalFeed.items}/>
>>>>>>> Create balance sub component
      </div>
    );
  }
}

export default Home;