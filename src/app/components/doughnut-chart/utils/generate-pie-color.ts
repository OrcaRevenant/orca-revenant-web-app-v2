export default function generatePieColor(
  iteration: number,
) {
  const index = iteration % 10;

  return {
    0: "--utility-brand-50",
    1: "--utility-brand-100",
    2: "--utility-brand-200",
    3: "--utility-brand-300",
    4: "--utility-brand-400",
    5: "--utility-brand-500",
    6: "--utility-brand-600",
    7: "--utility-brand-700",
    8: "--utility-brand-800",
    9: "--utility-brand-900",
  }[index];
}
