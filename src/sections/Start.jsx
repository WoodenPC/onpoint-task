import React from 'react';
import { cn } from '@bem-react/classname';

import { Section } from '../components/Section';
import { Pulse } from '../components/Pulse';

const classes = cn('StartSection');

class StartSection extends React.PureComponent {
  render() {
    return (
      <Section classMix={classes()}>
        <h1 className={classes('Title')}>
          Всегда ли цели терапии СД2 на поверхности ?
        </h1>
        <div className={classes('TopPoint')}>
          <span className={classes('TopPointText')}>Цель по HbA1c</span>
          <Pulse size='big' />
        </div>
        <div className={classes('LeftPoint')}>
          <span className={classes('LeftPointText')}>Гипогликемия</span>
          <Pulse size='medium' />
        </div>
        <div className={classes('BottomPoint')}>
          <span className={classes('BottomPointText')}>Осложнения СД</span>
          <Pulse size='small' />
        </div>
        <div className={classes('RightPoint')}>
          <span className={classes('RightPointText')}>СС риски</span>
          <Pulse size='small' />
        </div>
      </Section>
    )
  }
}

export { StartSection };