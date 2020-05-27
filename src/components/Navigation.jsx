import React, { useMemo } from 'react';
import { cn } from '@bem-react/classname';

const classes = cn('Navigation');

const Navigation = React.memo(({ count = 0, selectedIndex = 0, classMix = '' }) => {
  const items = useMemo(() => {
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push(
        <div
          key={i}
          className={classes('Item', { selected: i === selectedIndex })}
        />
      );
    }
    return result;
  }, [count, selectedIndex]);
  return (
    <nav className={`${classes()} ${classMix}`}>
      {items}
    </nav>
  );
});

export { Navigation };