export function reserveSeat(eventId, seatNumber) {
  console.log(
    `Connecting to booking service for event ${eventId}, seat ${seatNumber}...`
  );

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        reservationId: 'reservation-123',
      });
    }, 1000);
  });
}