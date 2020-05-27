import React from 'react';
import { cn } from '@bem-react/classname';

import { Section } from '../components/Section';
import { Gallery } from '../components/Gallery';

const classes = cn('SchemesSection')

class SchemesSection extends React.Component {
  render() {
    return (
      <Section classMix={classes()}>
        <h2 className={classes('Title')}>Звенья патогенеза СД2</h2>
        <Gallery classMix={classes('Gallery')}/>
      </Section>
    )
  }
}

export { SchemesSection };