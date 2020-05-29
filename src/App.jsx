import React from 'react';
import { cn } from '@bem-react/classname';

import { SchemesSection } from './sections/Schemes';
import { StartSection } from './sections/Start';
import { TherapySection } from './sections/Therapy';
import { Navigation } from './components/Navigation';
import { Next } from './components/Next';

const classes = cn('Page');

class App extends React.Component {
  state = {
    curSectionIndex: 0
  }
  lastScroll = 0;

  componentDidMount() {
    const sections = document.querySelectorAll('.Section');
    if (!sections) {
      return;
    }
    this.observer = new IntersectionObserver(this.onScroll, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    });

    sections.forEach((section) => {
      this.observer.observe(section);
    });

  }


  onScroll = (entries, observer) => {
    if (!entries || !Array.isArray(entries)) {
      return;
    }
    // немножко костыльно
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const { target } = entry;
        let index = 0;
        if (target.classList.contains('TherapySection')) {
          index = 1;
        } else if (target.classList.contains('SchemesSection')) {
          index = 2;
        }
        this.setState({ curSectionIndex: index });
      }
    });
  }

  render() {
    const { curSectionIndex } = this.state;
    return (
      <div className={classes()}>
        <StartSection />
        <TherapySection />
        <SchemesSection />
        <Navigation
          count={3}
          selectedIndex={curSectionIndex}
          classMix={classes('Navigation')}
        />
        <Next classMix={classes('Next')} visible={curSectionIndex === 0} />
      </div>
    );
  }
}

export { App };
