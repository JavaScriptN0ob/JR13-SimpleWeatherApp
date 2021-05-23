import React from 'react';

const WindSpeedAndHumidity = ({
  windSpeed,
  humidity,
  city,
}) => {
  return (
    <React.Fragment>
      <div>{`WindSpeed: ${windSpeed} Km/h`}</div>
      <div>{`Humidity: ${humidity} %`}</div>
      <div>{`City Name: ${city}`}</div>
    </React.Fragment>
  )
};

export default WindSpeedAndHumidity;
