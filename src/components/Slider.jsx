import React from 'react';
import { cn } from '@bem-react/classname';

const classes = cn('Slider');

const Slider = React.memo(({ values = [], min = 0, max = 1, step = 1, value = 0, onChange, classMix = '' }) => {
  return (
    <div className={`${classes()} ${classMix}`}>
      <input
        min={min}
        step={step}
        max={max}
        value={value}
        onChange={onChange}
        onInput={onChange}
        type='range'
        className={classes('Input')}
      />
      <div className={classes('Ticks')}>
        {values.map((val) => (
          <span>{val}</span>
        ))}
      </div>
    </div>
  );
});

export { Slider };