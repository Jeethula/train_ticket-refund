export const TICKET_TYPES = [
  { value: 'confirmed', label: 'Confirmed Ticket' },
  { value: 'rac-waitlist', label: 'RAC/Wait-listed Ticket' },
];

export const TRAIN_CLASSES = [
  { value: 'ac1', label: 'AC 1st Class/Executive Class' },
  { value: 'ac2', label: 'AC 2 Tier/First Class' },
  { value: 'ac3', label: 'AC 3 Tier/AC Chair Car/AC 3 Economy' },
  { value: 'sleeper', label: 'Sleeper Class' },
  { value: 'second', label: 'Second Class / 2S' },
];

export const CANCELLATION_TIMES = [
  { value: '48-plus', label: '48 hours or more before departure' },
  { value: '48-12', label: 'Between 48 and 12 hours before departure' },
  { value: '12-4', label: 'Between 12 and 4 hours before departure' },
  { value: '4-0.5', label: 'Up to 30 minutes before departure' },
];

export const FLAT_RATES = {
  'ac-1': { base: 240, gst: 12 },
  'ac-2': { base: 200, gst: 10 },
  'ac-3': { base: 180, gst: 9 },
  'sleeper': { base: 120, gst: 0 },
  'second': { base: 60, gst: 0 },
};

export const LAST_MINUTE_RATES = {
  'ac-1': 65,
  'ac-2': 65,
  'ac-3': 65,
  'sleeper': 60,
  'second': 30,
};