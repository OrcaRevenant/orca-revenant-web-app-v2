export default function numberFormat(
  value: string | number,
  options?: Intl.NumberFormatOptions
): string {
  return new Intl.NumberFormat(`en-UK`, options).format(+value);
}
