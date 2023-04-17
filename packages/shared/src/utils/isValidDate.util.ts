export const isValidDate = (maybeDate: unknown): boolean => {
  // it is a date
  if (Object.prototype.toString.call(maybeDate) === '[object Date]') {
    if (isNaN((maybeDate as Date).getTime())) return false; // date is not valid
    return true; // date is valid
  }
  // not a date
  return false;
};
