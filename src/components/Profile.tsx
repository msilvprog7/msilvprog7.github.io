import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

interface ProfileProps {
  src: string;
  name: string;
  title: string;
  company: string;
}

class Profile extends React.Component<ProfileProps> {
  render() {
    return (
      <Container className="p-3 profile">
        <Image
          className="profile-image"
          roundedCircle
          src={this.props.src}
          alt={this.props.name}
        />
        <div className="profile-name">{this.props.name}</div>
        <div className="profile-title">{this.props.title}</div>
        <div className="profile-title">{this.props.company}</div>
      </Container>
    );
  }
}

export default Profile;
