import React from 'react';
import { cn } from '@bem-react/classname';

const classes = cn('Pulse');

const Pulse = React.memo(({ size }) => {
  return (
    <span className={classes({ size })}></span>
  );
});

export { Pulse };