import React from 'react';
import axios from 'axios';
import Friends from './components/Friends';
import FriendForm from './components/FriendForm';
import { BrowserRouter as  Route, NavLink } from "react-router-dom"
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      friends: []
    }

  }

componentDidMount() {
  axios
  .get("http://localhost:5000/friends")
  .then(response => this.setState({friends: response.data}))
}

addFriend = newFriend => {
  axios
  .post("http://localhost:5000/friends", newFriend)
  .then(response => this.setState({friends: response.data}))
  .catch(error => console.log(error))
}

  render() {
    
    return (
      <div>
        <FriendForm key={this.state.friends.id}
        />
        {this.state.friends.map(friend => (
          <Friends key={friend.id} friend={friend}/>
        ))}
        <Route exact path="/" component={App} />
        <div>
          <NavLink exact to="/"/>
          )}/>
        </div>
        
      </div>
    )
  }
}

export default App;
