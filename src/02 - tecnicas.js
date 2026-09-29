// Ejercicio - sobre buenos tests
export function getUsers() {
  return [
    { username: 'chanchito', role: 'admin' },
    { username: 'felipe', role: 'editor' },
  ];
}

// Clase - testing positivo y negativo
export function calculateShipping(weight, destination) {
  if (typeof weight !== 'number' || weight <= 0) {
    return 'Invalid weight';
  }

  if (typeof destination !== 'string') {
    return 'Invalid destination';
  }

  let rate = 5;

  if (destination === 'domestic') {
    rate = 3;
  } else if (destination === 'international') {
    rate = 10;
  }

  return weight * rate;
}

// Ejercicio - testing positivo y negativo
export function validateProduct(name, price) {
  let errors = [];

  if (typeof name !== 'string' || name.length < 3) {
    errors.push('Invalid product name');
  }

  if (typeof price !== 'number' || price <= 0) {
    errors.push('Invalid price');
  }

  return errors.length === 0
    ? 'Validation successful'
    : errors.join(', ');
}

// Clase - pruebas de límites
export function isAgeAllowed(age, minAge, maxAge) {
  return age >= minAge && age <= maxAge;
}

// Ejercicio - pruebas de límites
export function isValidPassword(password) {
  const minLength = 8;
  const maxLength = 20;

  return password.length >= minLength && password.length <= maxLength;
}

// Ejercicio - prueba de límites
export function canRide(height, rideCode) {
  const minimumHeight = {
    ROLLER_COASTER: 140,
    WATER_SLIDE: 120,
  };

  if (!minimumHeight[rideCode]) {
    return 'Invalid ride code';
  }

  return height >= minimumHeight[rideCode];
}

// Clase - Pruebas de código asíncrono
export function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const users = ['Ana', 'Pedro', 'Juan'];
      resolve(users);
    });
  });
}

// Ejercicio - Montaje y desmontaje
export class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }

    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }

    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

// Ejercicios adicionales
export function createEvent(event) {
  if (!event.title)
    return {
      success: false,
      error: { code: 'invalid_title', message: 'Title is missing' },
    };

  if (event.capacity <= 0)
    return {
      success: false,
      error: { code: 'invalid_capacity', message: 'Capacity is invalid' },
    };

  return { success: true, message: 'Event was successfully created' };
}

// Más ejercicios
export function isValidLicenseKey(key) {
  // Longitud mínima
  if (key.length < 10) {
    return false;
  }

  // Al menos una mayúscula
  if (!/[A-Z]/.test(key)) {
    return false;
  }

  // Al menos un número
  if (!/\d/.test(key)) {
    return false;
  }

  // Al menos un guión
  if (!/-/.test(key)) {
    return false;
  }

  // Sin espacios
  if (/\s/.test(key)) {
    return false;
  }

  return true;
}