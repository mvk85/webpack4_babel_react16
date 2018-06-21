export function getNotificationError(message) {
  return {
    title: 'Внимание!',
    message,
    position: 'tr',
    autoDismiss: 5
  };
}

export const styleNotification = {
  NotificationItem: { // Override the notification item
    DefaultStyle: { // Applied to every notification, regardless of the notification level
      margin: '10px 5px 2px 1px'
    }
  }
};