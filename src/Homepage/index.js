import React  from 'react';
import Header from '../Header';

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const general   = this.props.config.general;
    const fullName  = `${general.firstName} ${general.lastName}`;

    return (
      <div className="homepage">
        <Header
          baseUrl={general.baseUrl}
          fullName={fullName}
          links={this.props.config.header}
        />
        <div className="jumbotron">
          <div className="container">
            <img src="profile.png" className="big-profile-picture" />
            <h1>{fullName}</h1>
            <p>
              {general.jobTitle}
              &nbsp;at&nbsp;
              <a href={general.companyUrl} target="_blank">
                {general.company}
              </a>
            </p>
            <a className="btn btn-reverse" href="me.html">About me</a>
          </div>
        </div>
        <footer>
          powered by <a href="https://github.com/yrezgui/napersona" target="_blank">Napersona</a>
        </footer>
      </div>
    );
  }
}
