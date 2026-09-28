export function sumar(a, b) {
	return a + b;
}

export function min(a, b) {
    if (a < b) return a;
    if (b < a) return b;
    return b;
}

export function fooBar(number) {
  if (number % 15 === 0) {
    return "foobar";
  }

  if (number % 3 === 0) {
    return "foo";
  }

  if (number % 5 === 0) {
    return "bar";
  }

  return number;
}