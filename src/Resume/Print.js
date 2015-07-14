import React  from 'react';

export default class Print extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a className="btn btn-sm" href="javascript:window.print();" onClick="window.print()">Print</a>
    );
  }
}
