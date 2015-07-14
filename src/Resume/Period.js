import React  from 'react';
import moment from 'moment';

export default class Period extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    if (!this.props.end) {
      return <p className="right">{moment(this.props.start).format('MMM YYYY')} - Now</p>;
    }

    return <p className="right">{moment(this.props.start).format('MMM YYYY')} - {moment(this.props.end).format('MMM YYYY')}</p>;
  }
}
