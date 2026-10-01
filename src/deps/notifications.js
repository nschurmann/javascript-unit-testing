export function sendNotification(userId, message) {
  console.log(`Connecting to notification service...`);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        userId,
        message,
      });
    }, 1000);
  });
}