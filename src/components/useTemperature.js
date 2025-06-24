import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '2da26b001ff090e2c17591d5682d8915';
const CITY = 'Delhi'; // make this dynamic later

export default function useTemperature() {
    const [temperature, setTemperature] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTemperature = async () => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
                );
                const temp = response.data.main.temp;
                setTemperature(temp.toFixed(1)); // ✅ fixed here
            } catch (err) {
                setError('Failed to fetch temperature');
                console.error(err);
            }
        };

        fetchTemperature();

        // Optional: auto-update every 5 minutes
        const interval = setInterval(fetchTemperature, 5 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    return temperature !== null ? `${temperature}°C` : error || 'Loading...';
}
