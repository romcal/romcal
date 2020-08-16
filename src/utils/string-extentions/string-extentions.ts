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
  const toCamelCase = this.toCamelCase();
  return toCamelCase.charAt(0).toUpperCase() + toCamelCase.slice(1);
};

/**
 * Converts string to camelCase.
 */
String.prototype.toCamelCase = function (this: string): string {
  return _.camelCase(this);
};
