export function destructure<T>(array: T[], max: number) {
  const items = array.slice(0, max);
  const others = array.slice(max);

  return { items, others };
}
