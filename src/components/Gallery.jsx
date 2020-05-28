import React from 'react';
import { cn } from '@bem-react/classname';
import { Slider } from './Slider';

const classes = cn('Gallery');

class Gallery extends React.PureComponent {
  state = {
    activeIndex: 2,
  }
  onChange = (e) => {
    this.setState({
      activeIndex: e.target.value
    });
  }

  render() {
    const { activeIndex } = this.state;
    const { classMix = '', items = [], titleClass = '' } = this.props;
    const values = items.map((item) => item.value);
    return (
      <div className={`${classes()} ${classMix}`}>
        <h2 className={titleClass}>{items[activeIndex].title}</h2>
        <div className={classes('ImageBox')}>
          <div className={classes('ImageWrapper')} style={{
            transform: `translateX(${activeIndex * -100 / items.length}%)`
          }}>
            {items.map((item, idx) => {
              const style = item.style || {};
              return (
                <div
                  key={idx}
                  src={item.image}
                  className={classes('Item')}
                  style={{
                    backgroundImage: `url(${item.image})`,
                    ...style
                  }}
                />
              )
            }
            )}
          </div>
        </div>
        <Slider
          values={values}
          min={0}
          max={items.length - 1}
          step={1}
          value={activeIndex}
          onChange={this.onChange}
          classMix={classes('Slider')}
        />
      </div>
    )
  }
}

export { Gallery };