export default function generatePieColor(iteration: number) {
  const index = iteration % 10;

  return {
    0: "--utility-brand-500",
    1: "--utility-brand-600",
    2: "--utility-brand-700",
    3: "--utility-brand-800",
    4: "--utility-brand-900",
    5: "--utility-brand-100",
    6: "--utility-brand-50",
  }[index];
}
