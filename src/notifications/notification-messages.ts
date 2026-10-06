export const NOTIFICATION_TITLE = "Food Valley <3";

export const DAILY_NOTIFICATION_HOUR = 15;
export const DAILY_NOTIFICATION_MINUTE = 0;

export const NOTIFICATION_MESSAGES = [
  "What's cooking today? 🍳",
  "Your next favorite recipe might already be waiting! 🌱",
  "Time to make something delicious! 🍓",
  "A little cooking adventure sounds good right now 👩‍🍳",
  "Don't forget about your saved recipes! 📖",
] as const;

export function getRandomNotificationMessage(
  previousMessage?: string
): string {
  const availableMessages = previousMessage
    ? NOTIFICATION_MESSAGES.filter(
        (message) => message !== previousMessage
      )
    : [...NOTIFICATION_MESSAGES];

  const randomIndex = Math.floor(
    Math.random() * availableMessages.length
  );

  return availableMessages[randomIndex];
}