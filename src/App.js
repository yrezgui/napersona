import React          from 'react';
import {RouteHandler} from 'react-router';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const general   = this.props.config.general;
    const fullName  = `${general.firstName} ${general.lastName}`;

    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>Napersona - Generate easily your personal website</title>
          <link rel="stylesheet" href="style.css" />
        </head>
        <body>
          <RouteHandler config={this.props.config} />
        </body>
      </html>
    );
  }
}