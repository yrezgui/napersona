import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="masthead">
        <div className="container">
          <a className="masthead-logo" href={this.props.links.baseUrl}>
            {this.props.fullName}
          </a>

          <nav className="masthead-nav">
            <a href="/about-me">Me</a>
            <a href="/resume">Resume</a>
            <a href={this.props.links.blog} target="_blank">Blog</a>
            <a href={'https://twitter.com/' + this.props.links.twitter} target="_blank">Twitter</a>
            <a href={'https://github.com/' + this.props.links.github} target="_blank">GitHub</a>
          </nav>
        </div>
      </header>
    );
  }
}