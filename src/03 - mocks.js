import { getTaxRate } from './deps/taxes';
import { getWeather } from './deps/weather';
import { logEvent } from './deps/telemetry';
import { reserveSeat } from './deps/bookings';
import { isValidUsername, saveUser } from './deps/users';
import { sendNotification } from './deps/notifications';
import auth from './deps/auth';

// Clase - Mock modulos
export function getPriceWithTax(price, country) {
  const taxRate = getTaxRate(country);

  return price + price * taxRate;
}

// Ejercicio
export function getWeatherSummary(city) {
  const weather = getWeather(city);

  if (!weather) return 'Weather Unavailable';

  return `${weather.temperature}°C - ${weather.condition}`;
}

// Clase - Interaction testing
export function openDashboard() {
  logEvent('dashboard_opened');

  return '<div>Dashboard</div>';
}

// Ejercicio
export async function bookSeat(eventId, seatNumber) {
  const result = await reserveSeat(eventId, seatNumber);

  if (!result.success) {
    return { success: false, error: 'seat_unavailable' };
  }

  return { success: true };
}

// Clase Mock parcial
export async function registerUser(username) {
  if (!isValidUsername(username)) return false;

  await saveUser({ username });

  return true;
}

// Clase - Espiando funciones
export async function startSession(userId) {
  const sessionId = auth.generateSessionId();

  await sendNotification(userId, `Session started: ${sessionId}`);

  return sessionId;
}

// Clase Mock de fechas
export function isSupportAvailable() {
  const currentHour = new Date().getHours();

  return currentHour >= 9 && currentHour < 18;
}

// Ejercicio
export function getWeekendFee() {
  const today = new Date();
  const day = today.getDay();

  const isWeekend = day === 0 || day === 6;

  return isWeekend ? 10 : 0;
}