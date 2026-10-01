export function getTaxRate(country) {
  console.log(`Connecting to tax service for ${country}...`);

  const rates = {
    US: 0.07,
    CL: 0.19,
    NZ: 0.15,
  };

  return rates[country] ?? 0;
}