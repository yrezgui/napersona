import React  from 'react';

export default class HireMe extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.availableForWork) {
      return <p>Sorry, I'm not looking for a job now.</p>;
    }

    return (
      <p>
        Interested to hire me (remote please) ? Send me a <a href="http://www.google.com/recaptcha/mailhide/d?k=01KX-wj5DHMcCe1Wdz8AbyVw==&c=U3IeiQp0Xxk7PsZE4VGRUfBk9EqUqz46dpG5lQkenC4=" target="_blank">mail</a>. No agencies sorry.
      </p>
    );
  }
}
