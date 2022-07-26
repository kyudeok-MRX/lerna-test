const hexToDecimal = (hex: string) =>
  ((hex && Number(`0x${hex}`)) ?? NaN) as number;

export default hexToDecimal;
