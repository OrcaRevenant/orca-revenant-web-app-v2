export default function numberFormat(
  value: string | number,
  options?: Intl.NumberFormatOptions
): string {
  if (Number.isNaN(+value)) return `-`;
  return new Intl.NumberFormat(`en-UK`, options).format(+value);
}
