export  const formatNumberToCurrency = (number: number): string => {
  const [whole, decimal] = number.toFixed(2).split(".");
  const formattedNumber = whole.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
  return `${formattedNumber}.${decimal}`;
};

export const formatCardNumber = (cardNumber: string): string => "**** **** " + cardNumber.slice(-4);