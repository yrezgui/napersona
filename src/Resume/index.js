import React  from 'react';
import Header from '../Header';
import HireMe from '../HireMe';
import Footer from '../Footer';
import Print  from './Print';

export default class Resume extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const general   = this.props.config.general;
    const fullName  = `${general.firstName} ${general.lastName}`;

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
                Resume
                <Print />
              </h1>
              <div className="markdown-body">
                <HireMe availableForWork={general.availableForWork} />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
