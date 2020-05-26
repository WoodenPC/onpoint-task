import React from 'react';
import { cn } from '@bem-react/classname';

const classes = cn('Slider');

const Slider = React.memo(({ min = 0, max = 1, value = 0, onChange }) => {
  return (
    <input
      min={min}
      max={max}
      value={value}
      onChange={onChange}
      type='range'
      className={classes()}
    />
  );
});

export { Slider };