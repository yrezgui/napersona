import React  from 'react';
import marked from 'marked';
import Period from './Period';
import Skills from './Skills';

export default class Job extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const details     = this.props.details;
    const description = marked(details.description);

    return (
      <div className="job-item">
        <h2>
          <span>{details.title} at </span>
          <a href={details.url} target="_blank">{details.company}</a>
        </h2>
        <div className="clearfix">
          <Skills skills={details.skills} />
          <Period start={details.start} end={details.end} />
        </div>
        <div dangerouslySetInnerHTML={{__html: description}} />
      </div>
    );
  }
}
