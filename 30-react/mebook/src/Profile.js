import React from 'react'


class Profile extends React.Component {
  componentDidMount() {
    console.log("Profile Mounting")
    // imagine this is a chat app so fetch all chats
  }
  render() {
    return (
      <h1>Super Cool Profile {this.props.name}</h1>
    )
  }
}


export default Profile
