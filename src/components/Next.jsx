import React from 'react';
import { cn } from '@bem-react/classname';

const classes = cn('Next');

const Next = React.memo(({ visible = false, classMix }) => {
  return (
    <div className={`${classes({ visible })} ${classMix}`}>
      <span className={classes('Text')}>Листайте вниз</span>
      <span className={classes('Icon')}/>
    </div>
  );
});

export { Next };