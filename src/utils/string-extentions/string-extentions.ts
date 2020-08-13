import _ from 'lodash';

// Ensure this is treated as a module.
export {};

declare global {
  interface String {
    toPascalCase(): string;
    toCamelCase(): string;
  }
}

/**
 * Converts string to PascalCase.
 */
String.prototype.toPascalCase = function (this: string): string {
  const words = this.match(/[a-z]+/gi);
  if (!words) return '';
  return words.map((word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()).join('');
};

/**
 * Converts string to camelCase.
 */
String.prototype.toCamelCase = function (this: string): string {
  return _.camelCase(this);
};
