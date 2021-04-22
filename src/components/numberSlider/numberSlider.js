import React, { useState } from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import './numberSlider.scss';

const NumberSlider = ({ min, max, initialValue, onSliderValueChange }) => {
  const [sliderValue, setSliderValue] = useState(initialValue || 0);

  const handleSliderValueChange = (newValue) => {
    setSliderValue(newValue);
    onSliderValueChange(newValue);
  };

  return (
    <Row className="number-slider__wrapper-row">
      <Col span={20} className="number-slider__wrapper-slider-col">
        <Slider
          min={min}
          max={max}
          onChange={handleSliderValueChange}
          value={typeof sliderValue === 'number' ? sliderValue : 0}
          className="number-slider__slider"
        />
      </Col>
      <Col span={4} className="number-slider__wrapper-input-number-col">
        <InputNumber
          min={min}
          max={max}
          value={sliderValue}
          onChange={handleSliderValueChange}
          className="number-slider__input-number"
        />
      </Col>
    </Row>
  );
};

NumberSlider.defaultProps = {
  min: 0,
  max: 0,
  initialValue: 12,
  onSliderValueChange: undefined,
};

NumberSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  initialValue: PropTypes.number,
  onSliderValueChange: PropTypes.func.isRequired,
};

export default NumberSlider;
