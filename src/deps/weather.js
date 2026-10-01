export function getWeather(city) {
  console.log(`Connecting to weather service for ${city}...`);

  const weather = {
    Auckland: {
      temperature: 18,
      condition: 'Cloudy',
    },
    Santiago: {
      temperature: 25,
      condition: 'Sunny',
    },
  };

  return weather[city] ?? null;
}