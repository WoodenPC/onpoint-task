import React from 'react';
import { cn } from '@bem-react/classname';

import { SchemesSection } from './sections/Schemes';
import { StartSection } from './sections/Start';
import { TherapySection } from './sections/Therapy';
import { Navigation } from './components/Navigation';

const classes = cn('Page');

class App extends React.Component {
  state = {
    curSectionIndex: 0
  }
  lastScroll = 0;
  pageRef = React.createRef();

  componentDidMount() {
    this.pageRef.current.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    this.pageRef.current.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const curScroll = this.pageRef.current.pageYOffset;
    const { curSectionIndex } = this.state;
    console.log(curScroll, this.lastScroll);
    if (curScroll > this.lastScroll && curSectionIndex < 2) {
      this.setState({ curSectionIndex: curSectionIndex + 1 });
    } else if (curScroll < this.lastScroll && curSectionIndex > 0) {
      this.setState({ curSectionIndex: curSectionIndex - 1 });
    }
    this.lastScroll = curScroll;
  }

  render() {
    const { curSectionIndex } = this.state;
    return (
      <div className={classes()} ref={this.pageRef}>
        <StartSection />
        <SchemesSection />
        <TherapySection />
        <Navigation
          itemsCount={3}
          selectedIndex={curSectionIndex}
          classMix={classes('Navigation')}
        />
      </div>
    );
  }
}

export { App };
