import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let className = 'footer';

    if (this.props.noStyle) {
      className = '';
    }

    return (
      <footer className={className}>
        powered by <a href="https://github.com/yrezgui/napersona" target="_blank">Napersona</a>
      </footer>
    );
  }
}
