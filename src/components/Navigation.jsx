import React, { useMemo } from 'react';
import { cn } from '@bem-react/classname';

const classes = cn('Navigation');

const Navigation = React.memo(({ itemsCount = 0, selectedIndex = 0, classMix = '' }) => {
  const items = useMemo(() => Array(itemsCount).fill(false), [itemsCount]);
  console.log(items);
  return (
    <nav className={`${classes()} ${classMix}`}>
      {items.forEach((_, idx) => (
        <div key={idx} className={classes('Item', { selected: idx === selectedIndex })}></div>
      ))}
    </nav>
  );
});

export { Navigation };