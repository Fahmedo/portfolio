'use client';

import { useState, useEffect } from 'react';

interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  description: string;
  humidity: number;
  windSpeed: number;
}

interface Coordinates {
  latitude: number;
  longitude: number;
}

export const useWeather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const fetchWeather = async (coords: Coordinates) => {
    try {
      // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
      const API_KEY = process.env.REACT_APP_WEATHER_API_KEY || 'demo_key';
      const { latitude, longitude } = coords;

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error('Weather data not available');
      }

      const data = await response.json();

      const weatherData: WeatherData = {
        location: data.name,
        temperature: Math.round(data.main.temp),
        condition: data.weather[0].main,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
      };

      setWeather(weatherData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch weather');
    } finally {
      setLoading(false);
    }
  };

  const getCurrentLocation = (): Promise<Coordinates> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported'));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          reject(new Error('Location access denied'));
        },
        { timeout: 10000, enableHighAccuracy: true }
      );
    });
  };

  useEffect(() => {
    const initWeather = async () => {
      try {
        const coords = await getCurrentLocation();
        await fetchWeather(coords);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to get location');
        setLoading(false);
      }
    };

    initWeather();
  }, []);

  return { weather, loading, error, refetch: () => setLoading(true) };
};
