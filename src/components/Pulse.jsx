import React from 'react';
import { cn } from '@bem-react/classname';

const classes = cn('Pulse');

const Pulse = React.memo(({ size }) => {
  return (
    <span className={classes({ size })}>
      <span className={classes('Circle1')}></span>
      <span className={classes('Circle2')}></span>
      <span className={classes('Circle3')}></span>
    </span>
  );
});

export { Pulse };