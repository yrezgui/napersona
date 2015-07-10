import React from 'react';

export default class Me extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="three-fourths column markdown-body large-on-small-device">
        <blockquote>
          <p>{this.props.description}</p>
        </blockquote>
        {this.props.content}
        <br />
      </div>
    );
  }
}
