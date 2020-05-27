import React from 'react';
import { cn } from '@bem-react/classname';

const classes = cn('Section');

const Section = React.memo(({ classMix = '', children }) => {
  return (
    <section className={`${classes()} ${classMix}`}>
      {children}
    </section>
  );
});

export { Section };