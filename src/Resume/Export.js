import React  from 'react';
import Print from './Print';

export default class Export extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="btn-group no-print right">
        <a className="btn btn-sm" href={this.props.exportFile}>Download PDF</a>
        <Print />
      </div>
    );
  }
}
