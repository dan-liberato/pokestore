export const formatterPrice = (value: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

export const getUrlParams = (url: string) => {
  const params = new URLSearchParams(url);
  return params;
};
