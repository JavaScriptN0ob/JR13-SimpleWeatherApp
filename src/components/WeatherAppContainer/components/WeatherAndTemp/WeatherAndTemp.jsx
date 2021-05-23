import React from 'react';

const WeatherAndTemp = ({
  weather,
  temp,
}) => {
  return (
    <div>
      <div>{`Weather: ${weather}`}</div>
      <div>{`Temp: ${temp.toFixed(1)} ℃`}</div>
    </div>
  );
};

export default WeatherAndTemp;
