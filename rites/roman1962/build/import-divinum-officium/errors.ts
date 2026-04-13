export class ImportError extends Error {
  constructor(
    message: string,
    readonly file?: string
  ) {
    super(file ? `[${file}] ${message}` : message);
    this.name = 'ImportError';
  }
}
