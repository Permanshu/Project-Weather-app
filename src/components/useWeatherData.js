 import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '2da26b001ff090e2c17591d5682d8915';
const CITY = 'Delhi';

export default function useWeatherData() {
  const [data, setData] = useState({
    temperature: null,
    wind: null,
    pressure: null,
    humidity: null,
    visibility: null,
    dewPoint: null,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
        );

        const temp = res.data.main.temp;
        const humidity = res.data.main.humidity;
        const dewPoint = temp - ((100 - humidity) / 5);

        setData({
          temperature: `${temp.toFixed(1)}°C`,
          wind: `${res.data.wind.speed} m/s`,
          pressure: `${res.data.main.pressure} hPa`,
          humidity: `${humidity}%`,
          visibility: `${(res.data.visibility / 1000).toFixed(1)} km`,
          dewPoint: `${dewPoint.toFixed(1)}°C`,
          error: null,
        });
      } catch (err) {
        console.error(err);
        setData(prev => ({ ...prev, error: 'Failed to fetch weather data' }));
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return data;
}
