import React from 'react';
import { cn } from '@bem-react/classname';

import { Section } from '../components/Section';
import { Gallery } from '../components/Gallery';

const classes = cn('SchemesSection')

const years = [
  { title: 'Звенья патогенеза СД2', value: 1988, image: '/assets/tab-1.png', style: { backgroundSize: '600px 400px' } },
  { title: 'Смертельный октет', value: 2009, image: '/assets/tab-2.png', style: { backgroundSize: '800px 500px' } },
  { title: 'Звенья патогенеза СД2', value: 2016, image: '/assets/tab-3.png' }
];

class SchemesSection extends React.PureComponent {
  render() {
    return (
      <Section classMix={classes()}>
        <Gallery
          items={years}
          classMix={classes('Gallery')}
          titleClass={classes('Title')}
        />
      </Section>
    )
  }
}

export { SchemesSection };