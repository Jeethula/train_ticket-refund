interface CalculateRefundParams {
  ticketType: string;
  trainClass: 'ac1' | 'ac2' | 'ac3' | 'sleeper' | 'second';
  cancellationTime: string;
  ticketAmount: number;
  passengers: number;
}

 const FLAT_RATES = {
  'ac1': { base: 240, gst: 12 },
  'ac2': { base: 200, gst: 10 },
  'ac3': { base: 180, gst: 9 },
  'sleeper': { base: 120, gst: 0 },
  'second': { base: 60, gst: 0 },
};

 const LAST_MINUTE_RATES = {
  'ac1': 65,
  'ac2': 65,
  'ac3': 65,
  'sleeper': 60,
  'second': 30,
};

export function calculateRefund({
  ticketType,
  trainClass,
  cancellationTime,
  ticketAmount,
  passengers,
}: CalculateRefundParams) {
  const perPassengerAmount = ticketAmount / passengers;
  let cancellationCharge = 0;
  let refundAmount = 0;

  if (ticketType === 'rac-waitlist') {
    cancellationCharge = LAST_MINUTE_RATES[trainClass] * passengers;
    refundAmount = ticketAmount - cancellationCharge;
    return { refundAmount, cancellationCharge };
  }

  if (!FLAT_RATES[trainClass]) {
    throw new Error(`Unknown train class: ${trainClass}`);
  }

  const flatRate = FLAT_RATES[trainClass];
  const baseCharge = flatRate.base;
  const gstCharge = flatRate.gst;

  switch (cancellationTime) {
    case '48-plus':
      cancellationCharge = (baseCharge + gstCharge) * passengers;
      break;
    case '48-12':
      const charge25 = perPassengerAmount * 0.25;
      cancellationCharge = Math.max(charge25, baseCharge + gstCharge) * passengers;
      break;
    case '12-4':
      const charge50 = perPassengerAmount * 0.5;
      cancellationCharge = Math.max(charge50, baseCharge + gstCharge) * passengers;
      break;
    case '4-0.5':
      cancellationCharge = LAST_MINUTE_RATES[trainClass] * passengers;
      break;
    default:
      cancellationCharge = 0;
      break;
  }

  refundAmount = ticketAmount - cancellationCharge;
  return { refundAmount: Math.max(0, refundAmount), cancellationCharge };
}

// interface CalculateRefundParams {
//   ticketType: string;
//   trainClass: string;
//   cancellationTime: string;
//   ticketAmount: number;
//   passengers: number;
// }

// const LAST_MINUTE_RATES = {
//   sleeper: 100,
//   ac: 200,
//   firstClass: 300,
// };

// const FLAT_RATES = {
//   sleeper: { base: 50, gst: 5 },
//   ac: { base: 100, gst: 10 },
//   firstClass: { base: 150, gst: 15 },
// };

// export function calculateRefund({
//   ticketType,
//   trainClass,
//   cancellationTime,
//   ticketAmount,
//   passengers,
// }: CalculateRefundParams) {
//   const perPassengerAmount = ticketAmount / passengers;
//   let cancellationCharge = 0;
//   let refundAmount = 0;

//   if (ticketType === 'rac-waitlist') {
//     cancellationCharge = LAST_MINUTE_RATES[trainClass as keyof typeof LAST_MINUTE_RATES] * passengers;
//     refundAmount = ticketAmount - cancellationCharge;
//     return { refundAmount, cancellationCharge };
//   }

//   const flatRate = FLAT_RATES[trainClass as keyof typeof FLAT_RATES];
//   const baseCharge = flatRate.base;
//   const gstCharge = flatRate.gst;

//   switch (cancellationTime) {
//     case '48-plus':
//       cancellationCharge = (baseCharge + gstCharge) * passengers;
//       break;
//     case '48-12':
//       const charge25 = perPassengerAmount * 0.25;
//       cancellationCharge = Math.max(charge25, baseCharge + gstCharge) * passengers;
//       break;
//     case '12-4':
//       const charge50 = perPassengerAmount * 0.5;
//       cancellationCharge = Math.max(charge50, baseCharge + gstCharge) * passengers;
//       break;
//     case '4-0.5':
//       cancellationCharge = LAST_MINUTE_RATES[trainClass as keyof typeof LAST_MINUTE_RATES] * passengers;
//       break;
//   }

//   refundAmount = ticketAmount - cancellationCharge;
//   return { refundAmount: Math.max(0, refundAmount), cancellationCharge };
// }


