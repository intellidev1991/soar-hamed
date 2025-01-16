export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(amount);
};

export const formatCardNumber = (cardNumber: string) => {
  const str = cardNumber.toString();
  return `${str.slice(0, 4)} **** **** ${str.slice(-4)}`;
};
