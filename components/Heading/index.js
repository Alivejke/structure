import React from 'react';

import styles from './heading.css';

// PURE
class Heading extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  getTitle() {
    const { title } = this.props;

    return (
      ... some complex html structure ...
      <div>
        <div>
          {title}
        </div>
      </div>
    );
  }

  getChapeau() {
    const { chapeau } = this.props;

    return (
      ... some complex html structure ...
      <div>
        <div>
          {title}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className={classes}>
        {nodeChapeau}
        {nodeTitle}
      </div>
    );
  }
}

Heading.propTypes = {
  title: React.PropTypes.string.isRequired,
  chapeau: React.PropTypes.string.isRequired,
};

export default Heading;
