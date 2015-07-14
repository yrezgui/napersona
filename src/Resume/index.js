import React  from 'react';
import marked from 'marked';
import Header from '../Header';
import HireMe from '../HireMe';
import Footer from '../Footer';
import Export from './Export';
import Job    from './Job';

export default class Resume extends React.Component {
  constructor(props) {
    super(props);
  }

  renderJob(details, index) {
    return <Job key={index} details={details} />;
  }

  render() {
    const general   = this.props.config.general;
    const fullName  = `${general.firstName} ${general.lastName}`;
    const summary   = marked(this.props.config.resume.summary);

    return (
      <div>
        <Header
          baseUrl={general.baseUrl}
          fullName={fullName}
          links={this.props.config.header}
        />
        <div className="container">
          <div className="columns docs-layout">
            <div className="three-fourths column markdown-body">
              <h1 className="page-title">
                {general.jobTitle}
                <Export exportFile={this.props.config.resume.exportFile} />
              </h1>
              <div className="markdown-body">
                <HireMe availableForWork={general.availableForWork} />
                <div dangerouslySetInnerHTML={{__html: summary}} />
                {this.props.config.resume.jobs.map(this.renderJob)}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
