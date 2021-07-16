import React from "react";

class Project extends React.Component {
  render() {
    return <div className="project">{this.props.children}</div>;
  }
}

class ProjectSubtitle extends React.Component {
  render() {
    return <h6 className="small">{this.props.children}</h6>;
  }
}

class ProjectTitle extends React.Component {
  render() {
    return <h6>{this.props.children}</h6>;
  }
}

class ProjectBody extends React.Component {
  render() {
    return <p>{this.props.children}</p>;
  }
}

interface ProjectImageProps {
  src: string;
  alt: string;
}

class ProjectImage extends React.Component<ProjectImageProps> {
  render() {
    return (
      <a href={this.props.src} rel="noopener noreferrer" target="_blank">
        <img
          className="project-image"
          src={this.props.src}
          alt={this.props.alt}
        />
      </a>
    );
  }
}

export default Object.assign(Project, {
  Subtitle: ProjectSubtitle,
  Title: ProjectTitle,
  Body: ProjectBody,
  Image: ProjectImage,
});
