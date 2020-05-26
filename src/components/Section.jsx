import React from 'react';
import { cn } from '@bem-react/classname';

const classes = cn('Section');

const Section = React.memo(({ type, children }) => {
  return (
    <section className={classes({ type })}>
      {children}
    </section>
  );
});

export { Section };