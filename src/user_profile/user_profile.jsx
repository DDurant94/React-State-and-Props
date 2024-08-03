import { Component } from "react";

class UserProfile extends Component {
  constructor() {
      super();
      this.state = { name: 'Alex' };
      this.changeName = this.changeName.bind(this);
  }

//   change the state of name
  changeName() {
      this.setState({name: 'Charlie'});
  }

  render() {
      return (
          <div>
              <h1>User Profile</h1>
              <p>Name: {this.state.name}</p>
              <button onClick={this.changeName}>Change Name</button>
          </div>
      )
  }
}



export default UserProfile