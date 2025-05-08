/* eslint-disable @typescript-eslint/no-explicit-any */
export function AsyncCatchError() {
  return function decorator(
    // eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
    target: Object,
    propertyName: string,
    descriptor: TypedPropertyDescriptor<any>
  ) {
    const originalMethod = descriptor.value as any;

    descriptor.value = async function (...args: any[]) {
      try {
        return await originalMethod.apply(this, args);
      } catch (error) {
        // enqueue error here
        throw error;
      }
    };

    return descriptor;
  };
}
