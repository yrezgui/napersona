import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  generateLink(item, index) {
    if (item.newTab) {
      return <a key={index} href={item.url} target="_blank">{item.name}</a>;
    } else {
      return <a key={index} href={item.url}>{item.name}</a>;
    }
  }

  render() {
    return (
      <header className="masthead">
        <div className="container">
          <a className="masthead-logo" href={this.props.baseUrl}>
            {this.props.fullName}
          </a>

          <nav className="masthead-nav no-print">
            {this.props.links.map(this.generateLink)}
          </nav>
        </div>
      </header>
    );
  }
}
