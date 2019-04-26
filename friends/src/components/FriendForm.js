import React from 'react';


class FriendForm extends React.Component {
    state = {
friends: {
    name: '',
    age: '',
    email: ''
}
    }

changeHandler = ev => {
ev.preventDefault();
let value = ev.target.value;

this.setState({
    ...this.state,
    friends: {
        ...this.state.friends,
        [ev.target.name]: value
    }
})
}

handleSubmit = ev => {
    ev.preventDefault();
    this.state.addFriend(this.state.friends)
    this.setState({
        ...this.state,
        friends: {
            name: '',
            age: '',
            email: ''
        }
    })
    this.state.history.push("/")
}


render() {
    return(
<div className="input-field">
    <h2>Add New Friend</h2>
<form onSubmit={this.state.handleSubmit}>
<input type="text"
name="name"
value={this.state.friends.name}
onChange={this.changeHandler}
placeholder=" name"
/>
<input type="text"
name="age"
value={this.state.friends.age}
onChange={this.changeHandler}
placeholder=" age"
/>
<input type="text"
name="email"
value={this.state.friends.email}
onChange={this.changeHandler}
placeholder=" email"
/>
<button type="submit" >Add Friend</button>
</form>
</div>
    )
}


}


export default FriendForm;