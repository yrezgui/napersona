import React  from 'react';
import Header from '../Header';
import Footer from '../Footer';

export default class Me extends React.Component {
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
              <h1 className="page-title">More about me</h1>
              <div
                className="markdown-body"
                dangerouslySetInnerHTML={{__html:this.props.config.me}}
              />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
