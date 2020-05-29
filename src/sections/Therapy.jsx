import React from 'react';
import { cn } from '@bem-react/classname';

import { Section } from '../components/Section';

const classes = cn('TherapySection');

class TherapySection extends React.PureComponent {
  render() {
    return (
      <Section classMix={classes()}>
        <h2 className={classes('Title')}>Основа терапии - патогенез СД2</h2>
      </Section>
    )
  }
}

export { TherapySection };