/* eslint-disable @typescript-eslint/no-explicit-any */
export  const formatNumberToCurrency = (number: number): string => {
  const [whole, decimal] = number.toFixed(2).split(".");
  const formattedNumber = whole.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
  return `${formattedNumber}.${decimal}`;
};

export const formatCardNumber = (cardNumber: string): string => "**** **** " + cardNumber.slice(-4);

export const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp);

  const options: any = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
  const formatter = new Intl.DateTimeFormat('en-US', options);

  return formatter.format(date);
}

export const formatMonthYear = (timestamp: number): string => {
  const date = new Date(timestamp);

  const options: any = { year: 'numeric', month: 'long' };
  const formatter = new Intl.DateTimeFormat('en-US', options);

  return formatter.format(date);
}

export const formatAmount = (number: number): string => {
  return new Intl.NumberFormat('en-US').format(number);
}