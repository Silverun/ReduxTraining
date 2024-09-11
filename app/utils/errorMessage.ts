export function getErrorMessage<T extends Error>(
  error: unknown,
  errorInstance: new (...args: any[]) => T,
): string {
  if (error instanceof errorInstance) {
    return (error as T).message;
  } else {
    return String(error);
  }
}
