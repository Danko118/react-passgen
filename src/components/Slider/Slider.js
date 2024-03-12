import React, { useState } from 'react';
import Style from './Slider.module.scss'

function Slider({
    value,
    onChange
}) {
  const [sliderValue, setSliderValue] = useState(value);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
    onChange(event.target.value)
    let proc = (event.target.value - 8) / 12 * 100;
    document.documentElement.style.setProperty("--slider-gradient","linear-gradient(90deg,var(--accent-color) " + proc + "%,#18171f " + proc + "%")
  };

  return (
    <div className={Style.slider}>
      <input
        type="range"
        min="8"
        max="20"
        value={sliderValue}
        onChange={handleSliderChange}
      />
      <p>{sliderValue}</p>
    </div>
  );
}

export default Slider;