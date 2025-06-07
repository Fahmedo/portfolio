// 'use client';

import type React from 'react';
import { useState, useEffect } from 'react';
import { MapPin, Cloud, Sun, CloudRain, CloudSnow, Wind } from 'lucide-react';

interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  description: string;
  icon: string;
}

interface LoaderProps {
  onLoadingComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onLoadingComplete }) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [progress, setProgress] = useState<number>(0);
  const [currentGreeting, setCurrentGreeting] = useState<string>('');

  // Get greeting based on time of day
  const getGreeting = (): string => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    if (hour < 21) return 'Good Evening';
    return 'Good Night';
  };

  // Get weather icon based on condition
  const getWeatherIcon = (condition: string) => {
    const iconProps = { size: 32, className: 'text-blue-400' };

    switch (condition.toLowerCase()) {
      case 'clear':
      case 'sunny':
        return <Sun {...iconProps} className="text-yellow-400" />;
      case 'clouds':
      case 'cloudy':
        return <Cloud {...iconProps} />;
      case 'rain':
      case 'drizzle':
        return <CloudRain {...iconProps} />;
      case 'snow':
        return <CloudSnow {...iconProps} />;
      case 'wind':
        return <Wind {...iconProps} />;
      default:
        return <Cloud {...iconProps} />;
    }
  };

  // Get user's location and weather
  useEffect(() => {
    const fetchLocationAndWeather = async () => {
      try {
        setProgress(20);

        // Get user's location
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;
              setProgress(40);

              try {
                // Using OpenWeatherMap API (you'll need to replace with your API key)
                // For demo purposes, we'll simulate weather data
                await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
                setProgress(60);

                // Simulated weather data
                const mockWeather: WeatherData = {
                  location: 'Your Location',
                  temperature: Math.floor(Math.random() * 30) + 10, // Random temp between 10-40°C
                  condition: ['Clear', 'Clouds', 'Rain', 'Snow'][
                    Math.floor(Math.random() * 4)
                  ],
                  description: 'Perfect weather for coding!',
                  icon: '01d',
                };

                setWeather(mockWeather);
                setProgress(80);

                // Get location name using reverse geocoding (simulated)
                setLocation('Your City');
                setProgress(100);
              } catch (weatherError) {
                console.error('Weather fetch error:', weatherError);
                setError('Unable to fetch weather data');
                setProgress(100);
              }
            },
            (geoError) => {
              console.error('Geolocation error:', geoError);
              setError('Location access denied');
              setProgress(100);
            },
            { timeout: 10000 }
          );
        } else {
          setError('Geolocation not supported');
          setProgress(100);
        }
      } catch (err) {
        console.error('Error:', err);
        setError('Something went wrong');
        setProgress(100);
      }
    };

    setCurrentGreeting(getGreeting());
    fetchLocationAndWeather();
  }, []);

  // Complete loading after progress reaches 100%
  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        setLoading(false);
        setTimeout(onLoadingComplete, 500); // Small delay for exit animation
      }, 1500); // Show completed state for 1.5 seconds

      return () => clearTimeout(timer);
    }
  }, [progress, onLoadingComplete]);

  if (!loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 animate-fadeOut">
        <div className="text-center text-white animate-fadeOut">
          <div className="text-2xl font-semibold mb-2">Welcome!</div>
          <div className="text-lg opacity-75">Entering portfolio...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="text-center text-white max-w-md mx-auto px-6 relative z-10">
        {/* Greeting */}
        <div className="mb-8 animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {currentGreeting}!
          </h1>
          <p className="text-xl text-blue-200">Welcome to my portfolio</p>
        </div>

        {/* Weather Information */}
        <div className="mb-8 animate-fadeInUp delay-300">
          {weather && !error ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center mb-4">
                <MapPin size={20} className="text-blue-400 mr-2" />
                <span className="text-lg font-medium">
                  {location || weather.location}
                </span>
              </div>

              <div className="flex items-center justify-center mb-3">
                {getWeatherIcon(weather.condition)}
                <div className="ml-4 text-left">
                  <div className="text-2xl font-bold">
                    {weather.temperature}°C
                  </div>
                  <div className="text-blue-200 capitalize">
                    {weather.condition}
                  </div>
                </div>
              </div>

              <p className="text-sm text-blue-200">{weather.description}</p>
            </div>
          ) : error ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center mb-2">
                <Cloud size={24} className="text-blue-400 mr-2" />
                <span className="text-lg">Weather Unavailable</span>
              </div>
              <p className="text-sm text-blue-200">
                Unable to fetch weather data
              </p>
            </div>
          ) : (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center mb-4">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-400"></div>
                <span className="ml-3 text-lg">Getting your weather...</span>
              </div>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="mb-6 animate-fadeInUp delay-500">
          <div className="bg-white/20 rounded-full h-2 mb-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-400 to-purple-500 h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-sm text-blue-200">
            {progress < 100 ? `Loading... ${progress}%` : 'Ready!'}
          </div>
        </div>

        {/* Loading Animation */}
        <div className="animate-fadeInUp delay-700">
          <div className="flex justify-center space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
