// interface CalculateRefundParams {
//   ticketType: string;
//   trainClass: 'ac1' | 'ac2' | 'ac3' | 'sleeper' | 'second';
//   cancellationTime: string;
//   ticketAmount: number;
//   passengers: number;
// }

//  const FLAT_RATES = {
//   'ac1': { base: 240, gst: 12 },
//   'ac2': { base: 200, gst: 10 },
//   'ac3': { base: 180, gst: 9 },
//   'sleeper': { base: 120, gst: 0 },
//   'second': { base: 60, gst: 0 },
// };

//  const LAST_MINUTE_RATES = {
//   'ac1': 65,
//   'ac2': 65,
//   'ac3': 65,
//   'sleeper': 60,
//   'second': 30,
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
//     cancellationCharge = LAST_MINUTE_RATES[trainClass] * passengers;
//     refundAmount = ticketAmount - cancellationCharge;
//     return { refundAmount, cancellationCharge };
//   }

//   if (!FLAT_RATES[trainClass]) {
//     throw new Error(`Unknown train class: ${trainClass}`);
//   }

//   const flatRate = FLAT_RATES[trainClass];
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
//       cancellationCharge = LAST_MINUTE_RATES[trainClass] * passengers;
//       break;
//     default:
//       cancellationCharge = 0;
//       break;
//   }

//   refundAmount = ticketAmount - cancellationCharge;
//   return { refundAmount: Math.max(0, refundAmount), cancellationCharge };
// }

// interface CalculateRefundParams {
//   ticketType: string;
//   trainClass: 'ac1' | 'ac2' | 'ac3' | 'sleeper' | 'second';
//   cancellationTime: string;
//   ticketAmount: number;
//   passengers: number;
// }

// // Flat cancellation fee per passenger (including GST)
// const FLAT_RATES = {
//   'ac1': 240,
//   'ac2': 200,
//   'ac3': 180,
//   'sleeper': 120,
//   'second': 60,
// };

// // Minimum cancellation charges
// const MIN_CANCELLATION_CHARGES = {
//   'ac1': 240,
//   'ac2': 200,
//   'ac3': 180,
//   'sleeper': 120,
//   'second': 60,
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

//   // Validate train class
//   if (!FLAT_RATES[trainClass]) {
//     throw new Error(`Unknown train class: ${trainClass}`);
//   }

//   // Handle RAC/Waitlist tickets
//   if (ticketType === 'rac-waitlist') {
//     // Clerk fee of Rs.60/- per passenger shall be deducted
//     cancellationCharge = 60 * passengers;
//     refundAmount = ticketAmount - cancellationCharge;
//     return { refundAmount, cancellationCharge };
//   }

//   // Calculate cancellation charge based on time
//   switch (cancellationTime) {
//     case '48-plus': // More than 48 hours before departure
//       // Minimum cancellation charges apply
//       cancellationCharge = MIN_CANCELLATION_CHARGES[trainClass] * passengers;
//       break;

//     case '48-12': // Between 48 hours and 12 hours
//       // 25% of fare subject to minimum cancellation charges
//       const charge25 = perPassengerAmount * 0.25;
//       cancellationCharge = Math.max(
//         charge25, 
//         MIN_CANCELLATION_CHARGES[trainClass]
//       ) * passengers;
//       break;

//     case '12-4': // Between 12 hours and 4 hours
//       // 50% of fare subject to minimum cancellation charges
//       const charge50 = perPassengerAmount * 0.50;
//       cancellationCharge = Math.max(
//         charge50,
//         MIN_CANCELLATION_CHARGES[trainClass]
//       ) * passengers;
//       break;

//     case '4-0.5': // Less than 4 hours before departure
//       // Flat 50% of fare as cancellation charge
//       cancellationCharge = perPassengerAmount * 0.50 * passengers;
//       break;

//     default:
//       // No refund if cancelled after chart preparation
//       cancellationCharge = ticketAmount;
//       break;
//   }

//   refundAmount = ticketAmount - cancellationCharge;
//   return { 
//     refundAmount: Math.max(0, refundAmount), 
//     cancellationCharge: Math.min(cancellationCharge, ticketAmount) 
//   };
// }

interface CalculateRefundParams {
  ticketType: string;
  trainClass: 'ac1' | 'ac2' | 'ac3' | 'sleeper' | 'second';
  cancellationTime: string;
  ticketAmount: number;
  passengers: number;
}

// Flat cancellation fee per passenger (including GST). AKA clerk charges
// These charges were fixed cancellation charges regardless of ticket price.
const FLAT_RATES = {
  'ac1': 240,
  'ac2': 200,
  'ac3': 180,
  'sleeper': 120,
  'second': 60,
};

// Minimum cancellation charges (same as FLAT_RATES)
const MIN_CANCELLATION_CHARGES = FLAT_RATES;

export function calculateRefund({
  ticketType,
  trainClass,
  cancellationTime,
  ticketAmount,
  passengers,
}: CalculateRefundParams) {
  if (passengers <= 0 || ticketAmount < 0) {
    throw new Error("Invalid input values.");
  }

  const perPassengerAmount = ticketAmount / passengers;
  let cancellationCharge = 0;
  let refundAmount = 0;

  // Validate train class
  if (!FLAT_RATES[trainClass]) {
    throw new Error(`Unknown train class: ${trainClass}`);
  }

  // Handle RAC/Waitlist tickets
  if (ticketType === 'rac-waitlist') {
    // Cancellation charge of Rs.60 per passenger including GST
    cancellationCharge = 60 * passengers;
    if (cancellationTime === '48-plus' || cancellationTime === '48-12' || cancellationTime === '12-4') {
      // if an rac-waitlist ticket is cancelled before 4 hours of departure, an additional cancellation charge of Rs. 20 per passenger will be deducted
      cancellationCharge += 20 * passengers;
    }
    refundAmount = ticketAmount - cancellationCharge;
    return { 
      totalAmount: ticketAmount,
      refundAmount: Math.max(0, refundAmount), 
      cancellationCharge: Math.min(cancellationCharge, ticketAmount),
      cancellationPercentage: (cancellationCharge * 100 / ticketAmount),
    };
  }

  // Calculate cancellation charge based on time
  switch (cancellationTime) {
    case '48-plus': // More than 48 hours before departure
      // Minimum cancellation charges apply (including GST)
      cancellationCharge = FLAT_RATES[trainClass] * passengers;
      break;

    case '48-12': // Between 48 hours and 12 hours
      // 25% of fare subject to minimum cancellation charges
      const charge25 = perPassengerAmount * 0.25;
      cancellationCharge = Math.max(
        charge25, 
        FLAT_RATES[trainClass]
      ) * passengers;
      break;

    case '12-4': // Between 12 hours and 4 hours
      // 50% of fare subject to minimum cancellation charges
      const charge50 = perPassengerAmount * 0.50;
      cancellationCharge = Math.max(
        charge50,
        FLAT_RATES[trainClass]
      ) * passengers;
      break;

    case '4-0.5': // Less than 4 hours before departure
      // Cancellation charge is 100% of the ticket amount
      cancellationCharge = ticketAmount;
      break;

    default:
      // No refund if cancelled after chart preparation
      cancellationCharge = ticketAmount;
      break;
  }

  // Ensure cancellation charge does not exceed ticket amount
  cancellationCharge = Math.min(cancellationCharge, ticketAmount);

  // Calculate refund amount
  refundAmount = Math.max(0, ticketAmount - cancellationCharge);

  return {
    totalAmount: ticketAmount,
    refundAmount: Math.max(0, refundAmount), 
    cancellationCharge,
    cancellationPercentage: (cancellationCharge * 100 / ticketAmount), 
  };
}