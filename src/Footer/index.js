import React      from 'react';
import classNames from 'classnames';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const className = classNames({
      'no-print': true,
      'footer': !this.props.noStyle
    });

    return (
      <footer className={className}>
        powered by <a href="https://github.com/yrezgui/napersona" target="_blank">Napersona</a>
      </footer>
    );
  }
}
