import React from 'react';
import { cn } from '@bem-react/classname';
import { Slider } from './Slider';

const classes = cn('Gallery');

const images = [
  '/assets/tab-1.png',
  '/assets/tab-2.png',
  '/assets/tab-3.png'
];

const years = [1988, 2009, 2016];

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
    const { activeIndex } = this.state
    const { classMix = '' } = this.props;
    return (
      <div className={`${classes()} ${classMix}`}>
        <div className={classes('ImageBox')}>
          <div className={classes('ImageWrapper')} style={{
            transform: `translateX(${activeIndex * -100 / images.length}%)`
          }}>
            {images.map((url, idx) => (
              <div
                key={idx}
                src={url}
                className={classes('Item')}
                style={{
                  backgroundImage: `url(${url})`
                }}
              />
            ))}
          </div>
        </div>
        <Slider
          values={years}
          min={0}
          max={years.length - 1}
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