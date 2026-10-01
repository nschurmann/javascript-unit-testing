function generateSessionId() {
  console.log('Connecting to authentication service...');

  return Math.floor(Math.random() * 1000000);
}

export default {
  generateSessionId,
};