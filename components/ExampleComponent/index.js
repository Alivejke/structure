import React from 'react';
...

import Heading from 'components/heading';
import Footer from 'components/footer';
...

import styles from './example-component.css';

class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  getHeading() {
    const { article } = this.props;
    const { title, chapeau } = article;

    const attrs = {
      title,
      chapeau,
      onClick: () => { ...some-logic... }
    };

    return <Heading {...attrs} />;
  }

  getContent() {
    const { viewer } = this.props;
    const { isBreaking } = viewer;

    const someComponentAttrs = {
      someProps,
      someOtherProp,
    };

    const otherComponentAttrs = {
      otherProps,
      otherOtherProp,
    };

    return (
      <div className={isBreaking ? styles.someBreakingClass : styles.someClass}>
        <div className={styles.someClass}>
          <SomeComponent {...someComponentAttrs} />
        </div>
        <div className={styles.someOtherClass}>
          <OtherComponentAttrs {...otherComponentAttrs} />
        </div>
      </div>
    );
  }

  getFooter() {
    const { viewer } = this.props;
    const { links, otherStuff } = viewer;

    const attrs = {
      links,
      otherStuff,
    };

    return <Footer {...attrs} />;
  }

  render() {
    return (
      <div>
        {this.getHeading()}
        {this.getContent()}
        {this.getFooter()}
      </div>
    );
  }
}

ExampleComponent.propTypes = {
  article: React.PropTypes.object.isRequired,
  viewer: React.PropTypes.object.isRequired,
};

