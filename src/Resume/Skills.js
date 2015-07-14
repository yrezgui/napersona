import React from 'react';

export default class Skills extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSkill(name, index) {
    const className = `state skill ${name}`;
    return <span key={index} className={className}>{name}</span>;
  }

  render() {
    return (
      <p className="left">
        {this.props.skills.map(this.renderSkill)}
      </p>
    );
  }
}
