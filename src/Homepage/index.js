import React  from 'react';
import Header from '../Header';
import Footer from '../Footer';

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
              <br />
              Organizer DevRocket UK
            </p>
            <a className="btn btn-reverse" href="me.html">About me</a>
          </div>
        </div>
        <Footer noStyle={true} />
      </div>
    );
  }
}
