import React from "react";
import Container from "react-bootstrap/Container";

interface HeadingProps {
  id: string;
  heading: string;
}

class Heading extends React.Component<HeadingProps> {
  render() {
    return (
      <Container id={this.props.id} className="p-3 heading">
        <h3>{this.props.heading}</h3>
        <div>{this.props.children}</div>
      </Container>
    );
  }
}

class HeadingSubtitle extends React.Component {
  render() {
    return <h6 className="small">{this.props.children}</h6>;
  }
}

class HeadingTitle extends React.Component {
  render() {
    return <h6>{this.props.children}</h6>;
  }
}

class HeadingBody extends React.Component {
  render() {
    return <p>{this.props.children}</p>;
  }
}

export default Object.assign(Heading, {
  Subtitle: HeadingSubtitle,
  Title: HeadingTitle,
  Body: HeadingBody,
});
