import React from 'react';
...

import Menu from './Menu';
...

import styles from './example-component-with-nested.css';

class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  getMenu() {
    const { links } = this.props;

    const attrs = {
      links,
      onClickItem: () => { ...some-logic... }
    };

    return <Menu {...attrs} />;
  }

  getSomeOtherStuff() {
    const { otherStuff } = this.props;

    const attrs = {
      otherStuff,
    };

    return <OtherStuff {...attrs} />;
  }

  render() {
    return (
      <div>
        {this.getMenu()}
        {this.getSomeOtherStuff()}
      </div>
    );
  }
}

ExampleComponent.propTypes = {
  links: React.PropTypes.array.isRequired,
  viewer: React.PropTypes.object.isRequired,
};

