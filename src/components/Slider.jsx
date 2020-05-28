import React, { useCallback, useState } from 'react';
import { cn } from '@bem-react/classname';

const classes = cn('Slider');

const Slider = React.memo(({ values = [], min = 0, max = 1, step = 1, value = 0, onChange, classMix = '' }) => {
  const [innerVal, setInnerVal] = useState(Math.round(value / (values.length - 1) * 100));
  const handleChange = useCallback((e) => {
    const { value } = e.target;
    setInnerVal(value);
  }, []);

  const handleTouchEnd = useCallback(() => {
    // костыльненько
    const normalizedValue = innerVal / 100;
    const normalizedIndex = Math.round(normalizedValue * (values.length - 1));
    onChange({ target: { value: normalizedIndex } });
    setInnerVal(Math.round(normalizedIndex / (values.length - 1) * 100));
  }, [values, onChange, innerVal]);

  return (
    <div className={`${classes()} ${classMix}`}>
      <input
        min={0}
        step={1}
        max={100}
        value={innerVal}
        onChange={handleChange}
        onTouchEnd={handleTouchEnd}
        onInput={handleTouchEnd}
        type='range'
        className={classes('Input')}
        style={{
          background: `linear-gradient(to right, #d1eaff ${innerVal}%, 
            #435063 ${innerVal}%)`
        }}
      />
      <div className={classes('Ticks')}>
        {values.map((val) => (
          <span key={val}>{val}</span>
        ))}
      </div>
    </div>
  );
});

export { Slider };