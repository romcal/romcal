export const safeWrapArray = <T>(input?: T | T[], fallback?: T[]): typeof fallback => {
  if (Array.isArray(input)) {
    return input;
  }
  return input ? [input] : fallback;
};
