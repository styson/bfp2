export const isNewArrival = (releaseDate: string): boolean => {
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  
  const productDate = new Date(releaseDate);
  return productDate >= sixMonthsAgo;
};

export const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};